const express = require('express');
const app = express();
require('./routes')(app);
require('dotenv').config();
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

if(!process.env.JWT_PRIVATE_KEY) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect(process.env.DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then( () => console.log('connected to mongoDb...'))
.catch( err => console.log('could not connect to mongoDB')) 


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));