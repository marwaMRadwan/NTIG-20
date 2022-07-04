const readFromSorage = (keyword) =>{
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

const writeDataToStorage = () => {}