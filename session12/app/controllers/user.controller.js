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
    static login = (req, res)=>{} 
    static logout = (req, res)=>{} 
    static edit = (req, res)=>{} 
    static editPassword = (req, res)=>{} 
    static forgetPassword = (req, res)=>{} 
    static activate = (req, res)=>{} 
    static deactivate = (req, res)=>{} 
    static delAccount = (req, res)=>{} 
    static changeImage = (req, res)=>{} 
    static allUsers = (req, res)=>{} 
    static singleDetails = (req, res)=>{} 
}
module.exports=User