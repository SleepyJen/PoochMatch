const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../models/');



/* Sign-In Strategy */
const SignInStrategy = new Strategy(
    { usernameField : 'email' } , authUser
);

/* check user in DB & match use password */
async function authUser (email, password, done) {
    console.log('Auth:', { email , password })

    try {
    
        const user = await User.findOne({ email });
        console.log('Check User:' , (user)?true:false)

        if (!user) {
            return done(null , false , {
                message :'Email not registered'
            }); 
        }

        if ( !bcrypt.compareSync(password , user.password) ) {
            return done(null , false , {
                message : 'Password is invalid'
            }); 
        }

        done(null , user , {
            message : `${user.email} login authenticated`
        }); 
    
    } catch (err) {
   
        console.log('Passport Error:' , err)
        return done(err , false);

    }
}



module.exports = SignInStrategy;