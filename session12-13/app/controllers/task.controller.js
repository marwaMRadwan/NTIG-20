const taskModel = require("../db/models/task.model")
const {resGenerator} = require("../helpers/methods")
class Task{
    static add = async(req, res) =>{
        try{
            const taskData = new taskModel({...req.body, addedby:req.user._id})
            await taskData.save()
            resGenerator(res,200,taskData, "message")
        }
        catch(e) {
            resGenerator(res, 500, e.message, "invalid")
        }
    } 
    static assignToUser = async(req, res) =>{} 
    static getAll = async(req, res) =>{} 
    static getSingle = async(req, res) =>{} 
    static edit = async(req, res) =>{} 
    static delTask = async(req, res) =>{} 
    static changeStatus = async(req, res) =>{} 
    static addComment = async(req, res) =>{} 
    static delComment = async(req, res) =>{} 
    static editComment = async(req, res) =>{} 
}
module.exports = Task