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
        type: String,
    },
    weight: {
        type: String,
    },
    spayedNeutered: {
        type: Boolean,
        required: "Must provide spayed/neutered state"
    },
    rabiesVaccine: {
        type: Boolean,
        required: "Must provide rabies vaccine state"
    },
    bordatellaVaccine: {
        type: Boolean,
        required: "Must provide bordatella vaccine state"
    },
    parvovirusVaccine: {
        type: Boolean,
        required: "Must provide parvovirus vaccine state"
    },
    distemperVaccine: {
        type: Boolean,
        required: "Must provide distemper vaccine state"
    },
    personality: {
        type: String
    },
    images: [
        { type: String }
    ],

});

const Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
