const postModel = require("../../database/models/post.model")
// const userModel = require("../../database/models/user.model")

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
    static singlePost = async(req,res)=>{
        try{
            const postData = await postModel.findById(req.params.id) //req.body.id
            if(!postData) throw new Error("post not found")
            res.status(200).send({
                apiStatus:true,
                data:{
                    postData,
                    isMine: (req.user._id.toString()==postData.userId)
                },
                message:"done"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.messaage, message:"error"})
        }
    }
    static delMyPost = async(req,res)=>{        
        try{
            const postData = await postModel.findOneAndDelete({
                _id:req.params.id,
                userId: req.user._id
            })
            if(!postData) throw new Error("invalid post data")
            res.send({
                apiStatus:true,
                data:postData, messaage:"done"
            })
        }
        catch(e){
        res.status(500).send({apiStatus:false, data:e.messaage, message:"error"})
        }
    }
    static editMyPost = async(req,res)=>{
        try{}
        catch(e){
            res.status(500).send({apiStatus:false, data:e.messaage, message:"error"})
        }

    }
    static showOtherPosts = async(req,res)=>{
        try{
            // const user = await userModel.findById(req.body.id)
            // await user.populate("myPosts")
            const data = await postModel.find({userId:req.body.id})
            res.send({data})
        }
        catch(e){
            res.status(500).send({apiStatus: false, data: e.message, message:"error in insert"})
        }
    }
    static addComment = async(req,res)=>{
        try{}
        catch(e){
            res.status(500).send({apiStatus:false, data:e.messaage, message:"error"})
        }

    }

}
module.exports=Post