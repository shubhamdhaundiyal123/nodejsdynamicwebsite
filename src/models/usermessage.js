const mongoose = require("mongoose");
const validator = require("validator");


//defining a schema

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email id")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10
    },
    message: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})

//we need to create a collection

const User = new mongoose.model("User", userSchema);

module.exports = User