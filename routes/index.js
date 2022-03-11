var express = require('express');
var router = express.Router();
var readChunk = require('read-chunk');
var imageType = require('image-type');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Car and parts'});
});

module.exports = router;
