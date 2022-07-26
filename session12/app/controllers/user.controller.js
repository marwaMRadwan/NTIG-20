const userModel = require("../db/models/user.model")
const {resGenerator} = require("../helpers/methods")
class User{
    static register = async(req, res)=>{
        try{
            const data = new userModel(req.body)
            await data.save()
            resGenerator(res, 200, data, "registered")
        }
        catch(e){
            resGenerator(res, 500, e.message, "cann't register")
        }
    } 
    static login = async(req, res)=>{
        try{
            const userData = await userModel.login(req.body.email, req.body.password)
            if(!userData.status) return resGenerator(res, 500, {otp: userData.otp}, "activate first")
            const token = await userData.generateToken()
            resGenerator(res, 200, {user:userData, token}, "registered")
        }
        catch(e){
            resGenerator(res, 500, e.message, "cann't login")
        }
    }
    static activate = async(req, res)=>{
        try{
            const userData = await userModel.login(req.body.email, req.body.password)
            if(userData.status) throw new Error("already active")
            if(userData.otp!=req.body.otp) throw new Error("invalid otp")
            userData.status=true
            userData.otp=null
            await userData.save()
            resGenerator(res, 200, userData, "ACTIVATED")
        }
        catch(e){
            resGenerator(res, 500, e.message, "cann't activate user")
        }
    } 
    static forgetPassword = (req, res)=>{}//task 
    static logout = (req, res)=>{} 
    static edit = (req, res)=>{} 
    static editPassword = (req, res)=>{} 
    static deactivate = (req, res)=>{} 
    static delAccount = (req, res)=>{} 
    static changeImage = (req, res)=>{} 
    static allUsers = (req, res)=>{} 
    static singleDetails = (req, res)=>{} 
}
module.exports=User