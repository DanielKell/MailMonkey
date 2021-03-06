const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 2}
})

//Loads a schema into mongoose
mongoose.model('users', userSchema)
