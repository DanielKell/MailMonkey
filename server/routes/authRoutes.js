const passport = require('passport');

//Exporting a function from this file
module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }
    ));
    //Scope = what we want to have access to in google

    app.get('/auth/google/callback', passport.authenticate('google'));

};
