const {resGenerator} = require("../helpers/methods")
const userModel = require("../db/models/user.model")
const jwt = require("jsonwebtoken")
const auth = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWTKEY)
        const user = await userModel.findOne({_id: decoded._id, "tokens.token": token})
        if(!user) throw new Error("user not found")
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized")
    }
}

module.exports=auth