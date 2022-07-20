require('dotenv').config()

const app = require("./app/src")

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`))

//npm start
//npm run dev