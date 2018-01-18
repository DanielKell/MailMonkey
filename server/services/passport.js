const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//This user is the one that we are returning in the passport.use
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true //If request runs through a proxy, trust it + use https
}, 
async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser) {
              //We already have a record with the profile ID
            return done(null, existingUser);
        }
              //No user record with this ID
              const user = await new User({ googleId: profile.id}) //Create new instance of a user
              .save() 
              done(null, user);
            
        })        
)