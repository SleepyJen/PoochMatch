module.exports = {
    isAuthenticated: JSON.parse(localStorage.getItem('localAuth')),

    toDeAuthenticate: () => { localStorage.removeItem('localAuth') },

    signIn: () => {
        localStorage.setItem('localAuth' , JSON.stringify(true))
    },

    signOut: () => {
        localStorage.setItem('localAuth' , JSON.stringify(false))
    },

    checkLocalAuth: () => {
        return localStorage.getItem('localAuth') !== null;
    },

    updateLocalAuth: (update) => {
        localStorage.setItem('localAuth', JSON.stringify(update))
    },

    getAuth: function () { return this.isAuthenticated }
};