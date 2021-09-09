const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    isAdmin: Boolean
});

function validateUser(data) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(50).required()
    })
    return schema.validate(data);
}

function validateLogin(data) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(50).required()
    })
    return schema.validate(data);
}

userSchema.methods.generateToken = function() {
    return jwt.sign({_id: this._id, name: this.name, isAdmin: this.isAdmin}, process.env.JWT_PRIVATE_KEY)
}

const User = mongoose.model('user', userSchema);

exports.User = User;
exports.validateLogin = validateLogin;
exports.validateUser = validateUser;