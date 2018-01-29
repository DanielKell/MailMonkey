const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); 

app.use(bodyParser.json()); 
//Middleware parses body and assigns to req.body

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//Same as requiring above, and running variable(app)
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5001; 
app.listen(PORT);