const express = require('express')

const app = express()

const PORT = 4000

app.get("/",(req, res)=>{
    res.send("NodeJS Local Server")

})

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`)

});