const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../models/');



/* Sign-Up Strategy */
const SignUpStrategy = new Strategy(
    { 
        usernameField : 'email',
        passReqToCallback: true
    }, 
    
    authUser
);


/* check user in DB & each input requirements */
async function authUser (req, email, password, done) {
    delete req.body['error'];
    delete req.body['cPassword'];
    req.body.firstName = req.body.firstName
    .trim().replace( /^\w/, cap => cap.toUpperCase() );
    req.body.lastName = req.body.lastName
    .trim().replace( /^\w/, cap => cap.toUpperCase() );
    
    console.log('REQ:' , req.body)
    const userData = req.body;

    try {

        const user = await User.findOne({ email });
        console.log('Check User:' , (user)?true:false)
        
        if (user) {
            return done(
                null , false, { 
                    message : `${user.email} already exists`
                }
            );
        } else if ( !missingData(userData) ) {
            return done(
                null , false, { 
                    message : 'missing required information'
                }
            );
        } else {
            return registerUser(userData , done)
            // return done(
            //     null , false, { 
            //         message : 'all filled'
            //     }
            // );
        }

    } catch (err) {
        
        console.log('Passport Error:' , err)
        return done(err , false);
    
    }
}


/* check if all 6/7 required inputs are filled */
/*  {...} || {} */
function missingData (obj) {
    let counter = 0;

    for ( let key in obj ) {
        console.log('√ - √')
        if ( !obj.hasOwnProperty(key) ) { return false }
        if ( !obj[key].length > 0 ) { return false }
        if ( ++counter >= 6 ) { return true }
    }

    console.log('× - ×')
    return true;
}


/* encrypt password & create new user */
async function registerUser (data , done) {
    try {

        data.password = await bcrypt.hashSync(data.password , 8);
        const user = await User.create(data);
        console.log('New User:' , user._id)
        
        return done(
            null , user, { 
                message : `${user.email} sign-up authenticated`
            }
        );

    } catch (err) { 
        
        console.log('Passport Error:' , err)
        return done(err , false);
    
    }
}




module.exports = SignUpStrategy;