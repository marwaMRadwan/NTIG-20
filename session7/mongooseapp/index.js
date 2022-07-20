const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/myDBG20")
const userModel  = new mongoose.model("User", {
    name:{
        type:String,
        lowercase:true,
        required:true,
        minlength:3,
        maxlength:10
    },
    age:{
        type:Number,
        min:21,
        max:60,
        default:21
    }
})
// const userData = new userModel({name:"m"})
// userData.save()
// .then(res=> console.log(res))
// .catch(e=> console.log(e.message))

// userModel
// .find()
// .then(res=> console.log(res))
// .catch(e=> console.log(e.message))

// userModel.findById("62d68dc9100da06123628711")
// .then(res=> console.log(res))
// .catch(e=> console.log(e.message))
userModel.findOne({age:37})
.then(res=> console.log(res))
.catch(e=> console.log(e.message))
