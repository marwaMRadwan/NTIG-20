const deal = require("./dealWithJson")
const add = (name, field) =>{
    const author = { id: Date.now(), name, field }
    const allAuthors = deal.readDataFromJson("author.json")
    allAuthors.push(author)
    deal.writeDataToJson("author.json", allAuthors)
}
module.exports = {
    add
}