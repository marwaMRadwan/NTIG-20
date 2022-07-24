const userModel = require("../../database/models/user.model")
const sendEmail = require("../helper/sendEmail.helper")
class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            // sendEmail(userData.email)
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"user added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message,
                message: "error in register"
            })
        }
    }
    static all = async(req, res)=>{
        try{
            const count=  req.query.count
            const pageNumber= req.query.pageNumber
            const allUsers= await userModel.find()
            .sort({name: 1, _id:1})
            .limit(count)
            .skip(pageNumber*count)
            res.status(200).send({
                apiStatus:true,
                data: allUsers,
                message: "data fetched"
            })

        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message,
                message: "error in fetching"
            })

        }
    }
    static login = async(req,res)=>{
        try{
            const userData = await userModel.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{userData, token},
                message:"Logged in success"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message,
                message: "error in login"
            })
        }
    }
    static me = async(req, res)=>{
        res.status(200).send({
            apiStatus:true,
            data:req.user,
            message:"data fetached"
        })
    }
    static logOut = async(req,res)=>{
        try{
            // [{token:1}, {token:2}, {token:3}]
            req.user.tokens = req.user.tokens.filter(t=> t.token!= req.token)
            await req.user.save()
            res.send({apiStatus:true, data: req.user, message:"logged out all"})
        }
        catch(e){
            res.status(500).send({apiStatus:false,data:e.message, message:"error"})
        }

    }
    static logOutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.send({apiStatus:true, data: req.user, message:"logged out all"})
        }
        catch(e){
            res.status(500).send({apiStatus:false,data:e.message, message:"error"})
        }
    }
    static editPassword=async(req,res)=>{
        try{
            req.user.password = req.body.password
            await req.user.save()
            res.send({apiStatus:true, data: req.user, message:"logged out all"})
        }
        catch(e){
            res.status(500).send({apiStatus:false,data:e.message, message:"error"})
        }
    }
}
module.exports = User