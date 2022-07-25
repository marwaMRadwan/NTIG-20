const mongoose = require("mongoose")
const postSchema= mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    title:{
        type:String,
        trim:true,
        lowecase:true,
        required:true
    },
    type:{
        type:String,
        trim:true,
        lowecase:true,
        required:true,
        enum:["txt", "file"]
    },
    txtContent:{
        type:String,
        trim:true,
        required: function(){ return this.type=="txt"}
    },
    file:{
        type:String,
        trim:true,
        required:this.type=="file"

    }
}, {
    timestamps:true
})

const Post = new mongoose.model("Post", postSchema)
module.exports=Post