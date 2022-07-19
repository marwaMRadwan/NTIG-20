const connection = require('../../db/connect')
class User{
    static home = (req, res)=>{
        connection( db => {
            db.collection("user")
            .find()
            .toArray((err, result)=>{
                if(err) return res.redirect("/dberror")
                res.render("home", {
                    pageTitle:"All Users",
                    allUsers:result,
                    isEmpty: !result.length
                })
            })
        })
    }
    static addPost = (req, res)=>{
        res.render("addPost", { pageTitle:"Add User" })
    }
    static addLogicPost = (req,res)=>{
        connection( db => {
            db.collection("user").insertOne(req.body)
            .then(()=> res.redirect("/") )
            .catch(e=> res.redirect("/dberror"))
        })
    }

    static edit = (req, res)=>{
        res.render("Edit", {
            pageTitle:"edit User"
        })
    }
    static single = (req, res)=>{
        const result = {}
        res.render("single", {
            pageTitle:"single User",
            result
        })
    }
    static del = (req, res)=>{
    }
}

// const userObj = new User()
// module.exports = userObj
module.exports = User