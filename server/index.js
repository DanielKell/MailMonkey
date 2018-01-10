const express = require('express');
require("./services/passport");

const app = express(); 

//Same as requiring above, and running variable(app)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001; 
app.listen(PORT);