import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connection is established")
    }catch(err){
        console.log(`Database connection is not established ${err.message}`)
    }
}
export default connectDB