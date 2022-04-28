module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body.password === 'undefined'){
            return next();
        }
        if (req.body.password === 'titkos'){
            req.session.loggedIn = true;
            return req.session.save(error => res.redirect('/index'));
        }
        res.locals.error = 'Incorrect password!';
        return next;
    }
};