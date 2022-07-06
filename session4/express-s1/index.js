// npm init --y  // npm i express
//npm i -g nodemon
const express = require("express")
const app = express()
const staticFolder = `${__dirname}/static`
app.use(express.static(staticFolder))
//routes
app.get("/", (req, res)=>{
    res.send("hello")
})
app.get("/about", (req,res)=>{
    const data = {name:"marwa", age:37}
    res.send(data)
})
app.get("/contact", (req,res)=>{
    res.send("<h3>hello from contact page</h3>")
})
app.get("/test", (req,res)=>{
    const myFile = `${__dirname}/static/a.html`
    res.sendFile(myFile)
})
//engine (hbs) npm i hbs
// const hbs = require('hbs')
const viewsFolder = `${__dirname}/frontend/views`
app.set("view engine", "hbs")
app.set("views", viewsFolder)
app.get("/hbs", (req,res)=>{
    res.render("home", {name:"marwa", age:37})
})
//localhost:port
app.listen(3000, ()=>console.log("server on"))
//localhost:3000/