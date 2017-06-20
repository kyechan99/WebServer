var express = require('express');
var router = express.Router();
var boardService = require('../core/Core/services/board');

router.get('/categories/list', function(req, res) {
    var promise = boardService.getCategories();

    Promise.all([promise])
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});


router.post('/board/post', function(req, res) {
    var promise = boardService.post(req);

    Promise.all([promise])
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;