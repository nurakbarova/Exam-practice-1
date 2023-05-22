const express=require('express')
const bodyParser = require('body-parser')

const app=express()
const PORT=8080
app.get('/',(req,res)=>{
    res.send("hello word")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })