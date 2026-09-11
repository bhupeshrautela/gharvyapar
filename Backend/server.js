import dotenv from "dotenv"
dotenv.config()
import app from "./app.js"
const port=process.env.PORT || 5000
import connectDB from "./config.js"
connectDB()

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})