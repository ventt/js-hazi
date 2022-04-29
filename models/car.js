const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car',{
    manufacturer: String,
    type: String,
    date: Date,
    mileage: Number,
    fuelType: String,
});

module.exports = Car;