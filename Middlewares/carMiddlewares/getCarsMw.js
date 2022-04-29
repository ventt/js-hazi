/**
 * lists all the cars
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CarModel = requireOption(objectrepository, 'CarModel');

    return function (req, res, next){
        //find all cars from mongo db, without query!
        CarModel.find({}, (err,cars) =>{
            if(err){
                return next(err);
            }
            res.locals.cars = cars;
            return next();
        });
    };
};