const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowecase:true,
        required:true
    },
    age:{
        type:Number,
        default:21
    },
    email:{
        type:String,
        trim:true,
        lowecase:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) 
                throw new Error("invalid email format")
        }
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        lowecase:true
    }
}, {
    timestamps:true
})

const User = mongoose.model("User", userSchema)

module.exports = User