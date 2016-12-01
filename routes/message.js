let express = require('express');
let jwt = require('jsonwebtoken');
let router = express.Router();

let Message = require('../models/message');
let User = require('../models/user');

router.get('/', (req, res, next) => {
    Message.find()
    .populate('user', 'firstName')
    .exec((err, messages) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Success',
            obj: messages
        });
    });
});

router.use('/', (req, res, next) => {
    jwt.verify(req.query.token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/', (req, res, next) => {
    let decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        let message = new Message({
            content: req.body.content,
            user: user
        });
        message.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

router.patch('/:id', (req, res, next) => {
    let decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if (err) {
            return res.status(500).json({
                title: 'Not authenticated',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'Message not found!',
                error: {message: 'Message not found'}
            });
        }
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Message not found!',
                error: {message: 'Users do not match'}
            });
        }
        message.content = req.body.content;
        message.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', (req, res, next) => {
    let decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'Message not found!',
                error: {message: 'Message not found'}
            });
        }
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Message not found!',
                error: {message: 'Users do not match'}
            });
        }
        message.remove((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;