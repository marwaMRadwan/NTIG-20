/*
read , write json
module => add data , edit data, del data, show all, show single
books => id, name, author
*/
const author = require('./modules/author')

// author.add("marwa", "IT")
// author.showAll()
// author.single("1657024869987")
// author.del("1657024869987")
author.edit("1657024869987", {name:"abc", field:"xyz"})
