const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
    },
    tokens:[
        {
            token:{
            type:String,
            required:true
        }
    }    
    ]
}, {
    timestamps:true
})
userSchema.virtual("myPosts", {
    ref:"Post",
    localField:"_id",
    foreignField:"userId"
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
userSchema.statics.loginUser = async(email, password)=>{
    const userData = await User.findOne({email})
    if(!userData) throw new Error("invalid email")
    const passwordMatched = await bcryptjs.compare(password, userData.password)
    if(!passwordMatched) throw new Error("invalid password")
    return userData
}
userSchema.methods.generateToken = async function(req,res){
    const userData = this
    const token = jwt.sign({_id: userData._id}, "123")
    userData.tokens = userData.tokens.concat({token})
    await userData.save()
    return token
}
const User = mongoose.model("User", userSchema)

module.exports = User
