const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Comments.find({}).then(result => {
        res.json(result);
    });
});

router.post('/createComment', (req, res) => {
    db.Comments.create({
        userId: req.body.userId
    }).then(result => {
        res.json(result);
    });
});

router.post('/addComment/:id', (req, res) => {
    db.Comments.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                comments: req.body.comment
            }
        }).then(result => {
            res.json(result);
        });
});

router.delete('/delete/:id', (req, res) => {
    db.Comments.findOneAndDelete({ _id: req.params.id }).then(result => {
        res.send(result);
    });
});

module.exports = router;