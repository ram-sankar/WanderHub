const express = require('express');
const helmet = require('helmet');
const auth = require('./auth');
const users = require('./users');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.urlencoded({extended: true}));
    app.use(helmet());

    app.use(express.json());
    app.use('/api/auth', auth);
    app.use('/api/users', users);
    app.get('', (req, res) => {
        res.send('everything works...')
    })

    app.use(error);
}