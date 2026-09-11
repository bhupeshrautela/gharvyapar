import express from "express";

import cors from"cors"
import propertyRoute from "./Routes/propertyRoute.js";
import homeRoute from "./Routes/homeRoute.js";
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use("/",homeRoute)
app.use("/property",propertyRoute)

export default app