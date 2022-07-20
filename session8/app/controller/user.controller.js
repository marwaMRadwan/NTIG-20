const userModel = require("../../db/models/user.model")
const fields = [
    {"fieldName": "name", "placeholder":"name", "value":"", error:""},
    {"fieldName": "email", "placeholder":"email", "value":"", error:""},
    {"fieldName": "password", "placeholder":"password", value:"", error:""},
    {fieldName: "gender", "placeholder":"gender", value:"", error:""},
    {fieldName: "phone", "placeholder":"phone", value:"", error:""},
    {fieldName: "age", "placeholder":"age", value:"", error:""},
]
class User{
    static home = async(req, res)=>{
        try{        
            const allUsers = await userModel.find()
                res.render("home", {
                    pageTitle:"All Users",
                    allUsers,
                    isEmpty: !allUsers.length
            })
        }
        catch(e){
            res.send(e.message)
        }
    }
    static addPost = (req, res)=>{
        res.render("addPost", { pageTitle:"Add User" })
    }
    static addLogicPost = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){ 
            // let myErr = []
            let myErr = {}
            for (const property in e.errors) {
            //     myErr.push({
            //         name:property, 
            //         val: e.errors[property]['properties'].message})
            // }            
            if(e.errors[property]['properties'])
                myErr[property] =e.errors[property]['properties'].message
            else
                myErr[property] =e.errors[property].message
            }
            // res.send(e)
            res.render("addPost", {myErr})
        }
    }
    static single = async(req, res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            if(result){
                fields.forEach(field=> field.value = result[field.fieldName])
            }
            res.render("single", {
                pageTitle:"Single User",
                result,
                fields
            })
        }
        catch(e){
            res.redirect(e.message)
        }
    }
    static edit = async(req, res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle:"Single User",
                result
            })
        }
        catch(e){
            res.redirect("/dberror")
        }
    }
    static editLogic= async(req,res)=>{
        // res.send({_id:req.params.id, ...req.body})
        try{
            let userData = await userModel.findById(req.params.id)
            // const userData = {_id:req.params.id, ...req.body}
            // await userModel.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
            for (const property in req.body) {
                userData[property] = req.body[property]
            }
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static del = async(req, res)=>{
        try{
            const result = await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.redirect("/dberror")
        }
    }
    static newAdd = async(req,res)=>{
        const fields = [
            {"fieldName": "name", "placeholder":"name", "value":"", error:""},
            {"fieldName": "email", "placeholder":"email", "value":"", error:""},
            {fieldName: "password", "placeholder":"password", value:"", error:""},
            {fieldName: "gender", "placeholder":"gender", value:"", error:""},
            {fieldName: "phone", "placeholder":"phone", value:"", error:""},
            {fieldName: "age", "placeholder":"age", value:"", error:""},
        ]
        res.render("newAdd", {pageTitle:"new add", fields})
    }
    static newAddLogic = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){ 
            fields.forEach(field=>{
                field.value = req.body[field.fieldName]
                if(e.errors[field.fieldName]){
                    if(e.errors[field.fieldName]["properties"])
                        field.error=e.errors[field.fieldName]["properties"].message
                    else
                        field.error=e.errors[field.fieldName].message
                }
            })
            res.render("newAdd", {pageTitle:"new add", fields})
        }
    }
    static addAddr = async(req,res)=>{
        res.render("addAddr", {pageTitle:"add user address"})
    }
    static addAddrLogic = async(req,res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            result.addresses.push(req.body)
            await result.save()
            res.redirect(`/single/${req.params.id}`)
        }
        catch(e){
            res.redirect(e.message)
        }

    }
}
module.exports = User