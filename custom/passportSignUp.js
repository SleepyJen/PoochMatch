const Strategy = require('passport-local').Strategy;
bcrypt = require('bcryptjs');
// const DB = require('../database.js');
const { User } = require('../models/');




const SignUpStrategy = new Strategy(
    { 
        usernameField : 'email',
        passReqToCallback: true
    }, 
    
    authUser
);



function authUser (req, email, password, done) {
    console.log('REQ:' , req.body)
    const data = req.body;

    // let checkUser = DB.find( user => (user.email === email));
    // console.log('Check User:', checkUser)

    User
    .findOne({ email })
    .then( user => {
        console.log('Check User:' , user)

        if (user) {
            return done(
                null,false,{
                    message : `${user.email} already exists` 
                }
            );
        } else {
            registerUser(data)
        }
    })
    .catch( err => {
        console.log('Send Error:' , err)
        // return done(err , false);
        registerUser(data)
    })

    function registerUser (data) {
        console.log(data);
       function isEmpty(obj){
            for(var key in obj) {
                if (
                    obj.hasOwnProperty(key) && 
                    obj[key].length >0) 
                {
                    return false;
                }
            }
            return true;
        }

        if ( isEmpty(data) ) {
            return done(null,false, { message : 'missing information' })
        } else {
            // const encryptPass = bcrypt.hashSync(password , 8);
            data.password = bcrypt.hashSync(password , 8);

            User
            // .create({ ...data , password : encryptPass })
            .create(data)
            .then( user => {
                console.log('New User:' , user)
                return done(
                    null,user,{ 
                        message : 
                        `${user.email} sign-up authenticated` 
                    }
                );
            })
            .catch( err =console.log(err))
        }
    }

    // if (checkUser) {
    //     return done(
    //         null,false,{ 
    //             message : 
    //             `${checkUser.email} already exists` 
    //         }
    //     );
    // } else {

    //     const salt = bcrypt.genSaltSync(0);
    //     const encryptPass = bcrypt.hashSync(
    //         password , salt
    //     );

    //     DB.push({
    //         id: Date.now().toString(),
    //         email: email,
    //         password: encryptPass
    //     })

    //     const newUser = DB[ DB.length - 1 ];
    //     console.log('New User:', newUser)

    //     return done(
    //         null,newUser,{ 
    //             message : 
    //             `${newUser.email} sign-up authenticated` 
    //         }
    //     );
    // }
}



module.exports = SignUpStrategy;