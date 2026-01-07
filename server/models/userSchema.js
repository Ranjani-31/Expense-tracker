const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name required"],
        minLength: [3, "use at least 3character"],
        maxLength: [30, 'use at most 30 characters']
    },
    email: {
        type: String,
        required: [true, "email required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, 'password required'],
        
    }
})


const user = mongoose.model("User", userSchema)
module.exports = user 