//const Schema = require('mongoose').Schema;
const db = require('../config/db');
const {Schema} = require("mongoose");

const Part = db.model('Part',{
    name: String,
    date: Date,
    _car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
});

module.exports = Part;