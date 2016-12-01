let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = require('./user');

let schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', (message) => {
    User.findById(message.user, (err, user) => {
        user.messages.pull(message);
        user.save();
    });
});

module.exports = mongoose.model('Message', schema);