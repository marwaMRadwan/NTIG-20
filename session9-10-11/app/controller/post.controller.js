const postModel = require("../../database/models/post.model")
class Post{
    static add = async(req,res)=>{
        try{
            const postData = new postModel({
                ...req.body,
                userId:req.user._id
            })
            await postData.save()
            res.status(200).send({
                data: postData
            })
        }
        catch(e){
            res.status(500).send({apiStatus: false, data: e.message, message:"error in insert"})
        }
    }
    static myposts = async(req,res)=>{
        try{
            await req.user.populate("myPosts")
            res.send({data:req.user.myPosts})
        }
        catch(e){
            res.status(500).send({apiStatus: false, data: e.message, message:"error in insert"})
        }
    }
}
module.exports=Post