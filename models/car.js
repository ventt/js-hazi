const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car',{
    manufacturer: String,
    type: String,
    date: Date,
    mileage: Number,
    fuelType: String,
    _owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Car;