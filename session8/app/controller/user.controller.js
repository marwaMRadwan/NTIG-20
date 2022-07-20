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
    static single = async(req, res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            res.render("single", {
                pageTitle:"Single User",
                result
            })
        }
        catch(e){
            res.redirect("/dberror")
        }
    }
    static edit = async(req, res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle:"Single User",
                result
            })
        }
        catch(e){
            res.redirect("/dberror")
        }
    }
    static editLogic= async(req,res)=>{
        // res.send({_id:req.params.id, ...req.body})
        try{
            let userData = await userModel.findById(req.params.id)
            // const userData = {_id:req.params.id, ...req.body}
            // await userModel.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
            for (const property in req.body) {
                userData[property] = req.body[property]
            }
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static del = async(req, res)=>{
        try{
            const result = await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.redirect("/dberror")
        }
    }
}
module.exports = User