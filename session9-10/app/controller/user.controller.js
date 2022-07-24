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
}
module.exports = User