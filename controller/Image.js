const express = require('express');
const router = express.Router();
const db = require('../models');
const Image = db.Image;
const imgPort = 'http://localhost:8000';
const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

var upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

router.get('/:id', async (req, res) => {
    let image = await Image.find({ _id: req.params.id });

    if (!image) {
        return res.status(404).send({ message: 'not found Images' })
    }
    image = image[0].images
    res.send({
        data: image
    });
});

router.get('/', (req, res) => {
    Image.find({}).then(result => {
        res.send(result);
    });
});

router.post('/file', upload.single('image'), async (req, res) => { //use 'image'
    try {
        let image = new Image({
            images: imgPort + '/uploads/' + req.file.filename
        });
        let data = await image.save();

        res.send({
            message: 'file uploaded',
            data: data
        });
    }

    catch (ex) {
        res.send(ex.message);
    }
});



module.exports = router;