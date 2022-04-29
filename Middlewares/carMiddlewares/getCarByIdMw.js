const requireOption = require("../requireOption");
/**
 * Get a car by id
 */
module.exports = function (objectrepository) {

    const CarModel = requireOption(objectrepository, 'CarModel');

    return function (req, res, next) {
        //find all cars from mongo db, without query!
        CarModel.findOne({_id: req.params.carId}, (err, car) => {
            if (err || !car) {
                return next(err);
            }
            res.locals.car = car;
            return next();
        });
    };
};