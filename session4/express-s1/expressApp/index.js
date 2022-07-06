const express = require("express")
const app = express()
const hbs = require("hbs")
const deal = require('./controller/dealWithJson')
const PORT = 3000
//build in pckg path
const path = require("path")
const staticFolder = path.join(__dirname, 'public')
const viewsFolder = path.join(__dirname, 'frontend/views')
const layoutFolder = path.join(__dirname, "frontend/layouts")
app.use(express.static(staticFolder))
app.set("view engine", 'hbs')
app.set("views", viewsFolder)
hbs.registerPartials(layoutFolder)
app.get("/", (req,res)=>{
    const data = deal.readDataFromJson("data.json")
    res.render("home", {pageTitle: "home page", title:"all images", data:data})
})
app.listen(PORT , ()=> console.log(`http://localhost:${PORT}`))