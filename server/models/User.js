const mongoose = require('mongoose');
//Same as: const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
})

//Loads a schema into mongoose
mongoose.model('users', userSchema)
