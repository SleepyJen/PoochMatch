const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Dog.find({}).then(result => {
        res.json(result);
    });
});

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

router.delete("/delete/:id", (req, res) => {
    db.Dog.deleteOne({ _id: req.params.id }).then(() => {
        res.send("success");
    });
});

module.exports = router;