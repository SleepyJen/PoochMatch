const passport = require('passport');
// const DB = require('../database.js');
const { User } = require('../models/');



passport.serializeUser( (user, done) => {
    console.log('Serialize User:', user)
    
    done(null, user.id)
})

passport.deserializeUser( (id, done) => {
    // let user = DB.find( user => (user.id === id));
    // console.log('Deserialize User:', id, user)
    // done(null, user)

    User
    .findById(id)
    .then( user => {
        console.log('Deserialize User:', id, user)
        done(null, user)
    })
    .catch( err => {
        console.log('× Error:', err)
        return done(err, false);
    })
})



const SignInStrategy = require('./passportSignIn.js');
const SignUpStrategy = require('./passportSignUp.js');



passport.use('local-signin', SignInStrategy)
passport.use('local-signup', SignUpStrategy)



module.exports = passport;