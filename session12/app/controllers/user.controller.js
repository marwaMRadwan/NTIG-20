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
    static me = async(req,res)=>{ resGenerator(res, 200, req.user, "data featched")}
    static forgetPassword = (req, res)=>{}//task 
    static logout = (req, res)=>{} //task
    static edit = (req, res)=>{} //task
    static editPassword = (req, res)=>{} //task 
    static deactivate = (req, res)=>{} //task
    static delAccount = (req, res)=>{} //task
    static changeImage = (req, res)=>{} 
    static allUsers = async(req, res)=>{
        try{
            const users = await userModel.find().sort({name:1})
            resGenerator(res, 200, users, "data fetched")
        }
        catch(e){
            resGenerator(res, 500, e.message, "error in data")
        }
    } 
    static singleDetails = async(req, res)=>{
        try{
            const users = await userModel.findById(req.params.id)
            if(!users) throw new Error("user not found")
            resGenerator(res, 200, users, "data fetched")
        }
        catch(e){
            resGenerator(res, 500, e.message, "error in data")
        }

    } 
}
module.exports=User