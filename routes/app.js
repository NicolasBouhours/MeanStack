var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/message', (req, res, next) => {
    res.render('node', {message: 'Hello!'});
});

module.exports = router;
