const passport = require('passport');
const User = require('../models/User');



passport.serializeUser((user, done) => {
    console.log('Serialize User:', user)

    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const data = await User.findOne({ _id: id });
        console.log('Deserialize User:', id, data)
        done(null, data)

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