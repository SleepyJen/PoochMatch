const express = require('express');
const router = express.Router();
const db = require('../models');


// get all dogs
router.get('/', (req, res) => {
    db.Dog.find({}).then(result => {
        res.json(result);
    });
});

//create a new dog
router.post('/createPooch', (req, res) => {
    db.Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        weight: req.body.weight,
        spayedNeutered: req.body.spayedNeutered,
        rabiesVaccine: req.body.rabiesVaccine,
        bordatellaVaccine: req.body.bordatellaVaccine,
        parvovirusVaccine: req.body.parvovirusVaccine,
        distemperVaccine: req.body.distemperVaccine,
        personality: req.body.personality,
    }).then(result => {
        res.json(result);
    });
});

// add dog images
router.post('/addImages/:id', (req, res) => {
    db.Dog.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                images: req.body.images
            }
        }).then(result => {
            res.send(result);
        });
});

//delete a dog by id
router.delete("/delete/:id", (req, res) => {
    db.Dog.deleteOne({ _id: req.params.id }).then(() => {
        res.send("success");
    });
});

//UPDATES
// update weight
router.patch("/updateWeight", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { weight: req.query.weight })
        .then(updatedDog => {
            res.send({ message: "success", name: updatedDog });
        });
});

// update age
router.patch("/updateAge", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { age: req.query.age })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});

// update spayed neutered state
router.patch("/updateSpayedNeutered", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { spayedNeutered: req.query.spayedNeutered })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});

// update rabies vaccine
router.patch("/updateRabiesVaccine", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { rabiesVaccine: req.query.rabiesVaccine })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});

// update bordatella vaccine
router.patch("/updateBordatellaVaccine", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { bordatellaVaccine: req.query.bordatellaVaccine })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});

// update parvo vaccine
router.patch("/updateParvovirusVaccine", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { parvovirusVaccine: req.query.parvovirusVaccine })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});

// update distemper vaccine
router.patch("/updateDistemperVaccine", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { distemperVaccine: req.query.distemperVaccine })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});

// update personality
router.patch("/updatePersonality", (req, res) => {
    db.Dog.findOneAndUpdate(
        { _id: req.query.id },
        { personality: req.query.personality })
        .then(updatedDog => {
            res.send({ message: "success", dog: updatedDog });
        });
});


module.exports = router;