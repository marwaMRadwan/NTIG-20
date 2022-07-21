const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")

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
userSchema.methods.toJSON = function(){
    const userData= this.toObject()
    delete userData.__v
    delete userData.password
    return userData
}
userSchema.pre("save", async function(){
    const userData = this
    if(userData.isModified("password"))
        userData.password = await bcryptjs.hash(userData.password, 10)
})
const User = mongoose.model("User", userSchema)

module.exports = User
