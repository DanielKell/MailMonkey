const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
              //We already have a record with the profile ID
            } else {
              //No user record with this ID
              new User({ googleId: profile.id}).save() //Create new instance of a user
            }
        })

        
    })
);