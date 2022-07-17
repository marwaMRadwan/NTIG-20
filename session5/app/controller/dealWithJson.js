const fs = require("fs")
class Deal{
    static readDataFromJson = (fileName) =>{
        let data = []
        try{
            data = JSON.parse(fs.readFileSync(fileName))
            if(!Array.isArray(data)) throw new Error("")
        }
        catch(e){
           data= []
        }
        return data
    }
    //write to json file
    static writeDataToJson = (fileName, data) =>{
        try{
            fs.writeFileSync(fileName, JSON.stringify(data))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
module.exports = Deal