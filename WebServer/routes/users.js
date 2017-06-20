'use strict';

var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
    res.render('test');
});
router.get('/index', function(req, res) {
    res.render('index');
});

module.exports = router;