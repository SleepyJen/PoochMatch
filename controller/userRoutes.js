const express = require('express');
const router = express.Router();
const db = require('../models');
const fs = require('fs');
const passport = require('../custom/');

//GET REQUESTS 
router.get('/', (req, res) => {
    db.User.find({}).then(result => {
        res.json(result);
    });
});

/*  */
router.post('/sign-up', (req, res, next) => {
    console.log('— REGISTER —')
    console.log('Server Data:', req.body)

    passport.authenticate('local-signup', userRegister)(req, res, next)

    function userRegister(err, user, info) {

        if (err) {
            console.log('Auth Error:', err)

            res.status = 500;
            return res.json({
                info, user, error: (
                    err || 'internal server problem'
                )
            });
        }

        if (!user) {
            console.log('User Error:', user)

            res.status = 500;
            return res.json({
                info, user, error: err
            });
        }



        console.log('User:', user)

        res.json({
            message: info,
            user: {
                email: user.email,
                firstName: user.firstName
            }
        })

    }

})

router.post('/login', (req, res, next) => {
    console.log('— LOGIN —')
    console.log('Server Data:', req.body)

    passport.authenticate('local-signin', userLogin)(req, res, next);

    function userLogin(err, user, info) {
        if (err) {
            console.log('Auth Error:', err)

            res.status = 500;
            return res.json({
                info, user, error: (
                    err.message || 'internal server problem'
                )
            });
        }

        if (!user) {
            console.log('User Error:', user)

            res.status = 500;
            return res.json({
                info, user, error: err
            });
        }



        console.log('User:', user)

        req.login(user, (error) => {
            if (error) {
                console.log('Login Error:', error)

                return res.json({
                    error: error || 'internal server problem'
                });
            } else {
                console.log('Auth User:', user)

                return res
                    .json({
                        message: info,
                        user: { email: user.email },
                        isAuth: req.isAuthenticated()
                    });
            }
        })

    }
})

router.get('/logout', (req, res) => {
    console.log('— LOGOUT —')
    console.log('Logout Session:', req.user)

    req.logout()

    console.log(req.session)
    req.session = null;
    res.send(req.isAuthenticated())
})
/*  */

router.get('/getByEmail/:email', (req, res) => {
    db.User.findOne({
        email: req.params.email
    }).then(result => {
        res.json(result);
    });
});

//POST REQUESTS
//Create new user
router.post('/createNewUser', (req, res) => {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        City: req.body.City,
        State: req.body.State,
        phone: req.body.phone,
        email: req.body.email
    }).then(result => {
        res.json(result);
    });
});

//pushing interests
router.post('/addInterests/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                Interests: req.body.Interests
            }
        }).then(result => {
            res.send(result);
        });
});

//pushing pets
router.post('/addPet/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                Pets: req.body.Pets
            }
        }).then(result => {
            res.send(result);
        });
});

//adding comment from Comments model 
router.post('/addComment/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    }, {
        $push: {
            comments: req.params.comments
        }
    });
});

//UPDATES
//update first name
router.post('/updateFirstName/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            firstName: req.body.firstName
        }).then(result => {
            res.json(result);
        });
});

//update last name
router.post('/updateLastName/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    }, {
        lastName: req.body.lastName
    }).then(result => {
        res.json(result);
    });
});

//update password
router.post('/updatePassword/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            password: req.body.password
        }).then(result => {
            res.json(result);
        });
});

router.post('/updateCity/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            City: req.body.City
        }).then(result => {
            res.json(result);
        });
});

router.post('/updateState/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    }, {
        State: req.body.State
    }).then(result => {
        res.json(result);
    });
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    db.User.findOneAndDelete({
        _id: req.params.id
    }).then(result => {
        res.send(result);
    });
});

module.exports = router;