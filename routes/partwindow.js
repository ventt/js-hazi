var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('part-window', { title: 'Part window'});
});

module.exports = router;