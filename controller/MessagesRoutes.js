const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Messages.find({}).then(result => {
    res.json(result);
  });
});

router.post('/createMessages', (req, res) => {
    db.Messages.create({
        userId: req.body.userId
    }).then(result => {
        res.json(result);
    });
});

router.post('/addMessages/:id', (req, res) => {
    db.Messages.findByIdAndUpdate({
        _id: req.params.id
    },
    {
        $push: {
            messages: req.body.message
        }
    }).then(result => {
        res.json(result);
    });
});

router.delete('/delete/:id', (req, res) => {
    db.Message.findByIdAndDelete({
        _id: req.params.id
    }).then(result => {
        res.send(result);
    })
});

module.exports = router;
