let express = require('express');
let router = express.Router();

let Message = require('../models/message');

router.post('/', (req, res, next) => {
    let message = new Message({
        content: req.body.content,
    });

    message.save((err, result) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;