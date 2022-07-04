const addUser = document.querySelector("#addUser")
const dataWrap = document.querySelector("#dataWrap")
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

const drawUsers = (allUsers) =>{
    if(allUsers.length==0){
        const tr = document.createElement('tr')
        dataWrap.appendChild(tr)
        tr.classList="alert alert-danger"
        let td = document.createElement('td')
        tr.appendChild(td)
        td.setAttribute("colspan", 5)
        td.textContent="no users yet"
        td.classList="alert alert-danger text-center"
    }
    allUsers.forEach((user, ind)=>{
        const tr = document.createElement('tr')
        dataWrap.appendChild(tr)
        let td = document.createElement('td')
        tr.appendChild(td)
        td.textContent=ind+1
        td = document.createElement('td')
        tr.appendChild(td)
        td.textContent=user.id
        td = document.createElement('td')
        tr.appendChild(td)
        td.textContent=user.name
        td = document.createElement('td')
        tr.appendChild(td)
        td.textContent=user.gender
        td = document.createElement('td')
        tr.appendChild(td)
        const delBtn = document.createElement("button")
        delBtn.className="btn btn-danger mx-2   "
        delBtn.textContent="delete"
        td.appendChild(delBtn)
        const showBtn = document.createElement("button")
        showBtn.className="btn btn-primary mx-2   "
        showBtn.textContent="show"
        td.appendChild(showBtn)
        const editBtn = document.createElement("button")
        editBtn.className="btn btn-warning mx-2   "
        editBtn.textContent="edit"
        td.appendChild(editBtn)
    })
}

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

if(dataWrap){
    const allUsers= readFromStorage("users")
    drawUsers(allUsers)
}