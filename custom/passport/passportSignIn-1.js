const Strategy = require('passport-local').Strategy;
// const DB = require('../database.js');
const bcrypt = require('bcryptjs');
const { User } = require('../models/');


const SignInStrategy = new Strategy(
    { 
        usernameField: 'email',
        // passReqToCallback: true,
        // session: false
    }, 
    
    authUser
);



function authUser (email, password, done) {

    console.log('Auth:', { email , password })
    // let user = DB.find( user => (user.email === email));
    // console.log('Check User:', user)
    
    User
    .findOne({ email })
    .then( user => {
        console.log('Check User:', user)
        // return done('invalid test', false);

        let matchPass = bcrypt.compareSync(
            password , user.password
        );
    
        if (!matchPass) {
            return done(
                null,false,{ message : 'Password is invalid' }
            );
        }

        return done(
            null,user,{ message : `${user.email} login authenticated` }
        );
    })
    .catch( err => {
        // console.log(err)
        // return done('danger', false);

        // if (!user) {
        return done(
            err,false,{ message : 'Email not registered' }
        );
            // 'user not found'
        // }
    })




    if (!user) {
        return done(
            'user not found'
            ,false,
            { 
                message : 
                'Email not registered' 
            }
        );
    }

    let matchPass = bcrypt.compareSync(
        password , user.password
    );

    if (!matchPass) {
        return done(
            'unknown password'
            ,false,
            { 
                message : 
                'Password is invalid' 
            }
        );
    }




    return done(
        null,user,{
            message : 
            `${user.email} login authenticated`
        }
    );
}



module.exports = SignInStrategy;