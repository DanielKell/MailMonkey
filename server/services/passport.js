const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//How to authenticate users inside of our application
//Setting up passport with the ID, secret, and callback URL
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
        console.log('access token: ', accessToken);
        console.log('refresh token: ', refreshToken);
        console.log('profile: ', profile);
    })
);