import express from "express"
const homeRoute=express.Router()

homeRoute.get("/",(req,res)=>{
    res.send("don't try again")
})

export default homeRoute