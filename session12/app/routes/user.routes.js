const router = require("express").Router()
const MyOwnMethods= require("../helpers/methods")
router.get("/add", (req,res)=>{
    MyOwnMethods.resGenerator(res, 200, "data", "hello")
})
module.exports=router