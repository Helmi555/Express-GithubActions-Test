const express=require('express')
const app =express()

const users=["helmi","hamma","salma"]

app.get("/",(req,res)=>{
    res.status(200).json(users)
})

app.listen(3000,()=>console.log("App running on : http://localhost:3000"))
