const express = require('express');
require("./services/passport");

const app = express(); //Generates a new application

//Same as requiring above, and running variable(app)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001; 
//When Heroku runs our app, it injects
//environment variables; set in the underlying runtime. 
//We want to pick these up at the appropriate time and use them.
app.listen(PORT);
