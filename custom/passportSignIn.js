const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../models/');



const SignInStrategy = new Strategy(
    { usernameField : 'email' } , authUser
);

async function authUser (email, password, done) {
    console.log('Auth:', { email , password })

    try {
    
        const user = await User.findOne({ email });
        console.log('Check User:' , user)

        return  ( ! bcrypt.compareSync(password , user.password) ) 
        ? done(null,false,{ message : 'Password is invalid' })
        : done(null,user,{ message : `${user.email} login authenticated` });
    
    } catch (err) {
   
        console.log('Send Error:' , err)
        return done(null,false,{ message : 'Email not registered' });
   
    }
}



module.exports = SignInStrategy;