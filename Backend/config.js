import mongoose from "mongoose";

async function connectDB(){
    try{
    await mongoose.connect(process.env.MOONGOOSE_URL)
    console.log("database is connected")
    }
    catch(err){
        console.log(err)
    }
}
export default connectDB