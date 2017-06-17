'use strict';

var express = require('express');
var router = express.Router();
var userService = require('../core/Core/services/user');

router.post('/signup', function(req, res) {

    var name        = req.body.name,
        email       = req.body.email,
        password    = req.body.password,
        grade       = req.body.grade,
        phone       = req.body.phone,
        city        = req.body.city,
        country     = req.body.country,
        company     = req.body.company,
        job         = req.body.job;

    var user = { name: name, email: email, password: password, grade: grade, phone: phone, city: city, country: country, company: company, job: job };

    console.log('asdasd');

    var promise = userService.createUser(user);

    Promise.all([promise])
        .then(() => {
            res.send(true);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.post('/signup/overlap', function(req, res) {

    var email = req.body.email;
    var data = { email: email };

    userService.isOverlap(data)
        .then((mail) => {
            if(mail === false) {
                res.send(false);
            } else {
                res.send(true);
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.post('/login', function(req, res) {
    var email = req.body.email;
    var pw = req.body.password;

    var user = { email: email, password: pw };

    userService.login(user)
        .then((flag) => {
            if(flag === false) {
                res.send(false);
            } else {
                res.send(true);
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;