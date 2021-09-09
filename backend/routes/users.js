const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt')
const app = express();
const { User, validateUser } = require('../models/user');
const auth = require('../middleware/auth');
const asyncMiddleware = require('../middleware/async');

app.get('/me', auth, asyncMiddleware(async (req, res) => {
    let user = await User.findById(req.user._id).select('-password') 
    if(!user)
        return res.status(400).send('Invalid token.')
    res.send(user);
}))

app.post('', asyncMiddleware(async (req, res) => {
    const result = validateUser(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)

    let user = await User.findOne({email: req.body.email}); 

    if (user) return res.status(400).send("user already registered");
    
    user = new User(_.pick(req.body, ["name", "email", "password"]))

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save(); 

    const token = user.generateToken();
    res.header('x-auth-token', token).send(_.pick(user, ["_id", "name", "email"]))    
}));

app.delete('/delete', asyncMiddleware(async (req, res) => {
    await User.deleteMany();
    res.send('deleted...')
}));

module.exports = app;