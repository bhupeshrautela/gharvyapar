import express from "express";
import propertyModel from "../models/propertyModel.js";
const propertyRoute=express.Router()

propertyRoute.get("/",async(req,res)=>{
    let data=await propertyModel.find().sort({Location:1}).limit(200)
    
    res.json(data)
})

propertyRoute.get("/selectedproperty",async(req,res)=>{
    const {city,price,bhk}=req.query
    let data=await propertyModel.find({
        Location:{$regex:city||"",$options:"i"},
        Price:{$lt:price||100000000},
        Baths:{$eq:bhk||5}
        
    }).limit(100)
   
    res.json(data)
})


export default propertyRoute