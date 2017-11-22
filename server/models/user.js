let mongoose = require('mongoose');

let User = mongoose.model('User', {
    user: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});


module.exports = {User};