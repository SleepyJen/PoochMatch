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

        let matchPass = bcrypt.compareSync(
            password , user.password
        );
    
        // if (!matchPass) {
        //     return done(
        //         null,false,{ message : 'Password is invalid' }
        //     );
        // }

        // return done(
        //     null,user,{ message : `${user.email} login authenticated` }
        // );

        return  (!matchPass) 
        ? done(null,false,{ message : 'Password is invalid' })
        : done(null,user,{ message : `${user.email} login authenticated` });
    })
    .catch( err => {
        console.log(err)
        
        return done(
            err,false,{ message : 'Email not registered' }
        );
    })
}



module.exports = SignInStrategy;