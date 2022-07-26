const mongoose = require("mongoose");
const validator = require("validator")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2, 
        maxlength:20
    }, 
    age:{
        type:Number,
        default:21,
        min:21,
        max:60
    }, 
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    }, 
    status:{
        type:Boolean,
        default:false
    }, 
    type:{
        type:String,
        required:true,
        trim:true,
        enum:["admin", "user"],
        default:"user",
        lowercase:true
    }, 
    password:{
        type:String,
        required:true,
        trim:true
    }, 
    pImage:{
        type:String,
        trim:true
    }, 
    otp:{
        type:String,
        trim:true,
        minlength:6,
        maxlength:6
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
const User = mongoose.model("User", userSchema)
module.exports=User