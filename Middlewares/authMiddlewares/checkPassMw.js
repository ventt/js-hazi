module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.incorrectPassMessage = '';
        if(typeof req.body.password === 'undefined'){
            return next();
        }
        if (req.body.password === 'titkos'){
            req.session.loggedIn = true;
            res.locals.incorrectPassMessage = '';
            return req.session.save(error => res.redirect('/index'));
        }
        res.locals.error = 'Incorrect password!';
        res.locals.incorrectPassMessage = 'Incorrect password!';
        return next();
    }
};