const userModel = require("../../database/models/user.model")
class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            
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
            const allUsers= await userModel.find()
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
}
module.exports = User