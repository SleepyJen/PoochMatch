const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//add email
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Must input a first name'
    },
    lastName: {
        type: String,
        required: 'Must input a last name'
    },
    password: {
        type: String,
        required: 'Must have password'
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Interests: {
        type: [Schema.Types.String],
        default: []
    },
    Pets: {
        type: [],
        default: []
    },
    imgs: {
        type: String
    },
    phone: {
        type: String,
        default: ""
    },
    Subscriptions: {
        type: {
            type: String,
            default: '30 Days Free'
        },
        date: {
            type: Date,
            default: Date.now()
        },
        paymentDate: {
            type: Date
        },
        status: {
            type: String
        }
    },
    comments: {
        type: [],
        default: []
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;