const deal = require("./dealWithJson")
const add = (name, field) =>{
    const author = { id: Date.now(), name, field }
    const allAuthors = deal.readDataFromJson("author.json")
    allAuthors.push(author)
    deal.writeDataToJson("author.json", allAuthors)
}
const showAll = () =>{
    const allAuthors = deal.readDataFromJson("author.json")
    if(!allAuthors.length) return console.log("no users yet")
    allAuthors.forEach(author=>{
        console.log(`id=> ${author.id} - name=> ${author.name} - field => ${author.field}`)
    })
}
const searchUser = (id, data)=>{
    const authorId = data.findIndex(author=> author.id == id)
    return authorId
}
const single = (id) =>{
    const allAuthors = deal.readDataFromJson("author.json")
    // const author = allAuthors.find(author=> author.id == id)
    const author = searchUser(id, data)
    if(author==-1) return console.log("no users with this id")
    console.log(`id=> ${author.id} - name=> ${author.name} - field => ${author.field}`)
}
const edit = (id, newData) =>{
    const allAuthors = deal.readDataFromJson("author.json")
    const myId = searchUser(id, data)
    if(myId==-1) return console.log("no users with this id")
    if(newData.name) allAuthors[myId].name = newData.name
    if(newData.field) allAuthors[myId].field = newData.field
    deal.writeDataToJson("author.json", allAuthors)
}
const del= (id) =>{
    const allAuthors = deal.readDataFromJson("author.json")
    const afterDel = allAuthors.filter(author=> author.id != id)
    if(allAuthors.length == afterDel.length) return console.log("no users with this id")
    deal.writeDataToJson("author.json",afterDel)
    console.log("deleted")
}

module.exports = { add, showAll, single, edit, del }