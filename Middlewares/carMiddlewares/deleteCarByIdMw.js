const requireOption = require("../requireOption");
/**
 * Deletes a car by id
 */
module.exports = function (objectrepository) {
    const CarModel = requireOption(objectrepository, 'CarModel');

    return function (req, res, next){
        if(typeof res.locals.car === 'undefined'){
            return next();
        }
        res.locals.car.remove(err =>{
            if(err){
                return next(err);
            }
            return res.redirect('/index');
        });
    };
};