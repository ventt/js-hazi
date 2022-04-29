const requireOption = require("../requireOption");
/**
 * Saves a car by id
 */
module.exports = function (objectrepository) {
    const CarModel = requireOption(objectrepository, 'CarModel');

    return function (req, res, next){
        next();
    };
};