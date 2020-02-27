const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {
        type: String,
        required: "Must input a dog name"
    },
    breed: {
        type: String,
        required: "Must enter a dog breed"
    },
    gender: {
        type: String,
        required: "Must enter a dog gender"
    },
    age: {
        type: String,
        required: "Must enter a dog age"
    },
    images: [{
        data: Buffer,
        contentType: String
    }],
    weight: {
        type: String,
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
        type: String,
    },
});

const Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
