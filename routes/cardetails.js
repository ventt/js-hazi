var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('car-details-form', { title: 'Car details'});
});

module.exports = router;