const router = require("express").Router()
const user = require("../controllers/user.controller")
router.post("/register", user.register)
module.exports=router