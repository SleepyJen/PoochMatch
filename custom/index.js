const passport = require('passport');
const { User } = require('../models/');



passport.serializeUser((user, done) => {
    console.log('Serialize User:', user._id)

    done(null, user._id)
})

passport.deserializeUser( async (id, done) => {
    try {

        const user = await User.findById(id);
        console.log('Deserialize User:', id, user._id)
        done(null, user)

    } catch (err) {

        console.log('Send Error:', err)
        done(err, false)

    }
})



const SignInStrategy = require('./passportSignIn.js');
const SignUpStrategy = require('./passportSignUp.js');



passport.use('local-signin', SignInStrategy)
passport.use('local-signup', SignUpStrategy)



module.exports = passport;