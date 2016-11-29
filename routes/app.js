let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res, next) => {
    User.findOne({}, (err, user) => {
        if (err) {
            return res.send('Error');
        }
        res.render('node', {email: user.email});
    });
});

router.post('/', (req, res, next) => {
    let email = req.body.email;
    let user = new User({
        firstName: 'Max',
        lastName: 'Schwarz',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');

});

module.exports = router;
