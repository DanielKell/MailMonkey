const express = require('express');
const app = express(); //Generates a new application

app.get('/', (req, res) => {
    res.send({bye: 'there' });
});

const PORT = process.env.PORT || 5001; 
//When Heroku runs our app, it injects
//environment variables; set in the underlying runtime. 
//We want to pick these up at the appropriate time and use them.
app.listen(PORT);
