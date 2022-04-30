/**
 * Saves a part by id
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const PartModel = requireOption(objectrepository, 'PartModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.date === 'undefined' ||
            typeof res.locals.car === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.part === 'undefined') {
            res.locals.part = new PartModel();
        }

        res.locals.part.name = req.body.name;
        res.locals.part.date = req.body.date;
        res.locals.part._car = res.locals.car._id;


        res.locals.part.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/car-window/${res.locals.car._id}`);
        });
    };
};