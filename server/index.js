const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express(); 

//Same as requiring above, and running variable(app)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001; 
app.listen(PORT);