const requireOption = require("../requireOption");
/**
 * Saves a car by id
 */
module.exports = function (objectrepository) {
    const CarModel = requireOption(objectrepository, 'CarModel');

    return function (req, res, next){
        if(typeof req.body.manufacturer === 'undefined' ||
            typeof req.body.type === 'undefined' ||
            typeof req.body.date === 'undefined' ||
            typeof req.body.mileage() === 'undefined'||
            typeof req.body.fuelType() === 'undefined')
        {
            return next();
        }
        if(typeof res.locals.car === 'undefined'){
            res.locals.car = new CarModel();
        }
        res.locals.car.manufacturer = req.body.manufacturer;
        res.locals.car.type = req.body.type;
        res.locals.car.date = req.body.date;
        res.locals.car.mileage = req.body.mileage;
        res.locals.car.fuelType = req.body.fuelType;

        res.locals.car.save(err => {
            if(err){
                return next(err);
            }
            return res.redirect('/index');
        });
    };
};