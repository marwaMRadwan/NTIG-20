const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const auth = require("../middleware/auth")

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/me", auth, userController.me)
router.get("/all",auth, userController.all)
router.post("/logout", auth, userController.logOut)
router.post("/logoutAll", auth, userController.logOutAll)
router.patch("/editPassword", auth, userController.editPassword)//put
// router.delete() //delete
module.exports=router
