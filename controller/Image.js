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