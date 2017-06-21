'use strict';

var express = require('express');
var router = express.Router();
var userService = require('../core/Core/services/user');



router.post('/signup', function(req, res) {

    /*// g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if(req.body.recaptcha === undefined || req.body.recaptcha === '' || req.body.recaptcha === null) {
        return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
    }
    // Put your secret key here.
    var secretKey = "6Lf8RiYUAAAAAJZpStGkrKXLdg0GvvLY95WmdeRm";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body.recaptcha + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl,function(error,response,body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if(body.success !== undefined && !body.success) {
            return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
        }
        //res.json({"responseCode" : 0,"responseDesc" : "Sucess"});*/

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
    /*});*/


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