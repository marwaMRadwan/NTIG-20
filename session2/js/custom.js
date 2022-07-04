const addUser = document.querySelector("#addUser")

const readFromStorage = (keyword) =>{
    let data 
    try{
        // data = localStorage.getItem("users") || []
        data = JSON.parse(localStorage.getItem(keyword))
        if(!Array.isArray(data)) throw new Error("data must be an array")
    }
    catch(e){
        data = []
    }
    return data
}
const writeDataToStorage = (keyword, data) => localStorage.setItem(keyword, JSON.stringify(data))

if(addUser){
    addUser.addEventListener("submit", (e)=>{
        e.preventDefault()
        const user = {
            id: Date.now(),
            name: addUser.elements.name.value,
            gender: addUser.elements.gender.value
        }
        const allUsers = readFromStorage("users")
        allUsers.push(user)
        writeDataToStorage("users", allUsers)
        addUser.reset()
        window.location.href = "index.html"
    })
}
