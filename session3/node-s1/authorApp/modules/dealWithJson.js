const fs = require("fs")
//read json file

//write to json file
const writeDataToJson = (fileName, data) =>{
    try{
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    catch(e){
        console.log(e.message)
    }
}
// module.exports={}