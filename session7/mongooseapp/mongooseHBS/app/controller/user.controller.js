const userModel = require("../../db/models/user.model")
class User{
    static home = async(req, res)=>{
        try{        
            const allUsers = await userModel.find()
                res.render("home", {
                    pageTitle:"All Users",
                    allUsers,
                    isEmpty: !allUsers.length
            })
        }
        catch(e){
            res.send(e.message)
        }
    }
    static addPost = (req, res)=>{
        res.render("addPost", { pageTitle:"Add User" })
    }
    // static addLogicPost = (req,res)=>{
    //     const userData = new userModel(req.body)
    //     userData.save()
    //     .then(()=> res.redirect("/"))
    //     .catch((e)=> res.send(e.message))
    // }
    static addLogicPost = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){ 
            res.send(e.message)
        }
    }
    static edit = (req, res)=>{
    }
    static editLogic= (req,res)=>{
    }
    static single = (req, res)=>{
    }
    static del = (req, res)=>{
    }
}
module.exports = User