const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const app = express();
const { User, validateLogin } = require('../models/user');
const asyncMiddleware = require('../middleware/async');

app.post('', asyncMiddleware(async (req, res) => {
    const result = validateLogin(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)

    let user = await User.findOne({email: req.body.email});

    if (!user) return res.status(400).send("Invalid username or password");  
    
    let validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send("Invalid username or password");  

    const token = user.generateToken();
    res.header('x-auth-token', token).send(_.pick(user, ["_id", "name", "email"]))     
}));

module.exports = app;