let express = require('express');
let router = express.Router();
let bcrypt = require('bcryptjs');

let User = require('../models/user');

router.post('/', (req, res, next) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });

    user.save((err, result) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

module.exports = router;
