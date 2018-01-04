const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express(); //Generates a new application

//How to authenticate users inside of our application
//Setting up passport with the ID, secret, and callback URL
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
        console.log(accessToken);
    })
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }
))
//Scope = what we want to have access to in google

const PORT = process.env.PORT || 5001; 
//When Heroku runs our app, it injects
//environment variables; set in the underlying runtime. 
//We want to pick these up at the appropriate time and use them.
app.listen(PORT);
