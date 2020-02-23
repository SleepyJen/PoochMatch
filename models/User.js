const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    imgs: [{
        data: Buffer,
        contentType: String
    }],
    phone: {
        type: String
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
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;