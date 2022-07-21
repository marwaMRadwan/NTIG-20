require("../database/connect")
const express = require("express")
const app = express()
app.use(express.json())
const userRoutes = require("../routes/user.routes")
const postRoutes = require("../routes/post.routes")
//routes
app.use("/api/user",userRoutes)
app.use("/api/post",postRoutes)
// 404 error route
app.all("*", (req,res)=>{
    res.status(404).send({
        apiStatus:false,
        message:"no routes with this segment"
    })
})
module.exports = app