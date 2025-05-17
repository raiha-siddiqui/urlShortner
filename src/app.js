import express from 'express'
import connectDB from './config/database.js'



const app= express()




const PORT= process.env.PORT
connectDB().then(()=>{
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
})
