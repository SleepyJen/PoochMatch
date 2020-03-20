const express = require('express');
const router = express.Router();
const db = require('../models');
const fs = require('fs');
const passport = require('../custom/');
const {
    check, validationResult
} = require('express-validator');

//GET REQUESTS 
router.get('/', (req, res) => {
    db.User.find({}).then(result => {
        res.json(result);
    });
});

/*  */
/* 
- register new user with passport
- returns user (obj) from callback
*/
router.post(
    '/sign-up',
    [
        check('firstName')
            .isAlpha().isLength({ min: 2 })
            .withMessage('requires only letters'),

        check('lastName')
            .isAlpha().isLength({ min: 2 })
            .withMessage('requires only letters'),

        check('email')
            .trim().isEmail().normalizeEmail()
            .withMessage('requires "@" & "." symbols'),

        check('password')
            .trim().isLength({ min: 5, max: 15 })
            .withMessage('requires 5-15 characters'),

        check('cPassword')
            .custom((value, { req }) => {
                // console.log('Confirm Pass:' , value , req);
                if (value !== req.body.password) {
                    throw new Error('must match password');
                } else {
                    console.log('password does match')
                    return true;
                }
            })
    ],
    (req, res, next) => {
        console.log('— REGISTER —')
        console.log('Server Data:', req.body)

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log('Error:', errors)

            res.status = 500;
            return res.json({
                error: errors.mapped()
            })
        } else {
            passport.authenticate(
                'local-signup', userRegister
            )(req, res, next)
        }

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

            console.log('Reg. User:', user._id, user.id)

            res.json({
                info,
                user: {
                    _id: user._id,
                    email: user.email
                }
            })

        }
    }
)

/* 
- login user with passport
- returns user (obj) from callback
- access to login with user (obj)
- req.user | req.isAuthenticated() | req.session
*/
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

        console.log('User:', user._id)

        req.login(user, (error) => {
            if (error) {
                console.log('Login Error:', error)

                res.status = 500;
                return res.json({
                    error: error || 'internal server problem'
                });
            } else {
                console.log('Auth User:', user._id)

                return res
                    .json({
                        info,
                        user: {
                            _id: user._id,
                            email: user.email
                        },
                        auth: req.isAuthenticated()
                    });
            }
        })

    }
})

/* 
- logout existing user 
- delete cookie session
- remove from passport
*/
router.get('/logout', (req, res) => {
    console.log('— LOGOUT —')
    console.log('Logout Session:', (req.user) ? true : false)

    req.logout()
    req.session = null;
    console.log('Logout User:', (req.user) ? true : false)

    return res
        .json({
            user: req.user,
            session: req.session,
            auth: req.isAuthenticated()
        });
})

/* check user auth state */
router.get('/check-user', (req, res) => {
    console.log('— USER —')
    console.log('Check Session:', (req.user) ? true : false)

    return res
        .json({
            user: (
                (req.user)
                    ? {
                        _id: req.user._id,
                        email: req.user.email
                    }
                    : null
            ),
            session: req.session,
            auth: req.isAuthenticated()
        })
})
/*  */

//get by email
router.get('/getByEmail/:email', (req, res) => {
    db.User.findOne({
        email: req.params.email
    }).then(result => {
        res.json(result);
    });
});

//get by id
router.get('/getById/:id', (req, res) => {
    db.User.findOne({
        _id: req.params.id
    }).then(result => {
        res.send(result);
    });
});

//get by City
router.get('/getByCity/:city', (req, res) => {
    db.User.find({
        City: req.params.city
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

//add Image
router.post('/addImage/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        { imgs: req.body.imgs }
    ).then(result => {
        res.send(result);
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

//update interests
router.post('/clearInterests/:id', (req, res) => {
    db.User.findByIdAndUpdate({
        _id: req.params.id
    },
        {
            $set: {
                Interests: []
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

//update pets
router.post('/clearPets/:id', (req, res) => {
    db.User.findByIdAndUpdate({
        _id: req.params.id
    },
        {
            $set: {
                Pets: []
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
router.post('/updatefirstName/:id', (req, res) => {
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
router.post('/updatelastName/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    }, {
        lastName: req.body.lastName
    }).then(result => {
        res.json(result);
    });
});

//update password
router.post('/updatepassword/:id', (req, res) => {
    /* DELETE AFTER TEST */
    console.log('REQ:', req.params,req.body)
    console.log('User:', (req.user)?true:false)
    res.send( (req.user)?req.user:false )
    
    // db.User.findOneAndUpdate({
    //     _id: req.params.id
    // },
    //     {
    //         password: req.body.password
    //     }).then(result => {
    //         res.json(result);
    //     });
});

//update City
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

//update State
router.post('/updateState/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    }, {
        State: req.body.State
    }).then(result => {
        res.json(result);
    });
});

//update Email
router.post('/updateemail/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            email: req.body.email
        }).then(result => {
            res.send(result);
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