const mongoose = require('mongoose');
//Same as: const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
})

mongoose.model('users', userSchema)