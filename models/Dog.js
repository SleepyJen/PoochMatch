const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {
        type: String,
        required: "Must input a dog name"
    },
    breed: {
        type: String,
    },
    gender: {
        type: String,
        required: "Must enter a dog gender"
    },
    age: {
        type: Number
    },
    images: [
        { type: String }
    ],
    weight: {
        type: Number
    },
    spayedNeutered: {
        type: Boolean,
        required: "Must priovide altered state"
    },
    vaccines: {
        type: [],
        default: [],
    },
    personality: {
        type: String
    },
});

const Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
