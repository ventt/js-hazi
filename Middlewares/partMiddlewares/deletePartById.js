/**
 * Deletes a part by id
 */

//TODO: not working
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.part === 'undefined') {
            return next();
        }
        res.locals.part.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/car-window/${res.locals.car._id}`);
        });
    };
};