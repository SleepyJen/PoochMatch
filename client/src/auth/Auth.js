module.exports = {
    auth: JSON.parse(localStorage.getItem('localAuth')),
    // auth: true,
    
    isAuth () { 
        console.log('Auth:' , this.auth)
        return this.auth;
    },

    signIn (cb) {
        localStorage.setItem('localAuth' , JSON.stringify(true))
        // this.auth = true;
        console.log('Auth:' , this.auth)
        cb()
    },

    signOut (cb) {
        localStorage.setItem('localAuth' , JSON.stringify(false))
        // this.auth = false;
        console.log('Auth:' , this.auth)
        cb()
    }
};