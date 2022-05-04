/**
 * Get a part by part ID
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const PartModel = requireOption(objectrepository, 'PartModel');

    return function(req, res, next) {
        PartModel.findOne({_id: req.params.partId}, (err, part) => {
            if (err) {
                return next(err);
            }

            res.locals.part = part;
            return next();
        });
    };
};