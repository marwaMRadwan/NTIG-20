const ObjectId = require('mongodb').ObjectId
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
        connection( db => {
            const userId = new ObjectId(req.params.id)
            db.collection("user")
            .findOne({_id: userId})
            .then(( result)=>{
                res.render("edit", {
                    pageTitle:"Edit User",
                    result
                })
            })
            .catch(e=> {
                console.log(e.message)
                res.redirect("/errordb")
            })
        })

    }
    static editLogic= (req,res)=>{
        connection( db => {
            const userId = new ObjectId(req.params.id)
            db.collection("user")
            .updateOne(
                {_id: userId},
                //{$inc: {age:1} }
                {$set: req.body}
                )
            .then(( result)=>{
                res.redirect("/")
            })
            .catch(e=> {
                res.redirect("/errordb")
            })
        })
    }
    static single = (req, res)=>{
        connection( db => {
            const userId = new ObjectId(req.params.id)
            db.collection("user")
            .findOne({_id: userId})
            .then(( result)=>{
                res.render("single", {
                    pageTitle:"single User",
                    result
                })
            })
            .catch(e=> {
                console.log(e.message)
                res.redirect("/errordb")
            })
        })
    }
    static del = (req, res)=>{
        connection( db => {
            const userId = new ObjectId(req.params.id)
            db.collection("user")
            .deleteOne({_id: userId})
            .then(()=>{res.redirect("/")})
            .catch(e=> {
                console.log(e.message)
                res.redirect("/errordb")
            })
        })

    }
}
module.exports = User