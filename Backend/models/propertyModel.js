import mongoose from "mongoose";

const propertySchema=new mongoose.Schema({
    Name:String,
    "Property Title":String,
    Price:Number,
    Location:String,
    Total_Area:Number,
    Price_per_SQRT:Number,
    Description:String,
    Baths:Number,
    Balcony:String  
})

const propertyModel=mongoose.model("property",propertySchema)
export default propertyModel