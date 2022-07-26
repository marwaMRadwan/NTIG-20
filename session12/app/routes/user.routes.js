const router = require("express").Router()
const user = require("../controllers/user.controller")
const {auth, authAdmin} = require("../middleware/auth.middleware")
router.post("/register", user.register)
router.post("/login", user.login)
router.post("/activateAcc", user.activate)
router.get("/me", auth, user.me)
module.exports=router