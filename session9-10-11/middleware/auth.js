const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user.model")
const auth = async(req,res, next)=>{
    try{
        // get user cuurent token => from header
        const token = req.header("Authorization").replace("bearer ", "")
        // convet token using jwt to get userId
        const decodedToken = jwt.verify(token, "123")
        // search db (_id, token)
        const userData = await userModel.findOne({
            _id:decodedToken._id,
            'tokens.token': token
        })
        // if(! user) unauthorized
        if(!userData) throw new Error("unauth")
        // continue
        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"unauth"
        })
    }
}
module.exports = auth

