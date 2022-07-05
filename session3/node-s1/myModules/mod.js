const f1 = () => {
    console.log("f1")
}
const f2 = () => {
    console.log("f2")
}
const f3 = () => {
    console.log("f3")
}
const add = (x,y)=>{
    return x+y
}
//module.exports=f1
module.exports = {
    f1,
    f2,
    f3,
    add
}