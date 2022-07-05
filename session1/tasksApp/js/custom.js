//dom 
/*
document.
getElementById
getElementByClassName
getElementByTagName


querySelector
querySelectorAll
*/

// const myForm = document.querySelector("#myForm")
// const data = document.querySelector("#data")
// myForm.addEventListener("submit", function(e){
//     e.preventDefault()
//     const userData = {
//         email: this.elements.email.value,
//         password: this.elements.password.value
//     }
//     console.log(userData);
//     data.innerHTML += `<h3>${userData.email} - ${userData.password}</h3>` 
// })
//object =>json data
// let data = [ {name:"marwa"},{name:"mazen"}, {name:"omar"}]
// localStorage.setItem("tasks", JSON.stringify(data))

const myObj = JSON.parse(localStorage.getItem("tasks"))
console.log(myObj)
console.log(typeof myObj)





