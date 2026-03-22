const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://user:<password>@cluster0.jpr0sle.mongodb.net/?appName=Cluster0`)

const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique:true,
        required: true  
    },

    password: String,
    age: Number
});

module.exports = mongoose.model("user",userSchema);