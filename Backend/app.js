import express from "express";

import cors from"cors"
import propertyRoute from "./Routes/propertyRoute.js";
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.use("/property",propertyRoute)

export default app