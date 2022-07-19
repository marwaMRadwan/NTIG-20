const mongoose = require("mongoose")
const validator = require("validator")
const User = mongoose.model("User", {
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        minlength:3,
        maxlength:20
    }, 
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("invalid email")
        }
    }, 
    phone:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isMobilePhone(value, 'ar-EG'))
                throw new Error("invalid phone number")
        }
    }, 
    password:{
        type:String,
        trim:true,
        minlength:6,
        maxlength:200,
        required:true,
        match:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        validate(value){
            if(value.includes(this.name))
                throw new Error("invalid password")
        }
    }, 
    age:{
        type:Number,
        min:21,
        max:60,
        required:true
    }, 
    gender:{
        type:String,
        required:true,
        trim:true,
        enum:["male", "female"],
        lowercase:true
    }, 
    image:{
        type:String
    }, 
    status:{
        type:Boolean, 
        default:false
    }, 
    createdAt:{
        type:Date,
        default: Date.now()
    }

})
module.exports = User