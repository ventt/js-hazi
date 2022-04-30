/**
 * Get a list of parts by car id
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const PartModel = requireOption(objectrepository, 'PartModel');

    return function(req, res, next) {
        if (typeof res.locals.car === 'undefined') {
            return next();
        }

        PartModel.find({ _car: res.locals.car._id }, (err, parts) => {
            if (err) {
                return next(err);
            }

            res.locals.parts = parts;
            return next();
        });
    };
};