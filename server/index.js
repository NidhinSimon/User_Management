import express from 'express'
import dotenv from 'dotenv'
import userRoute from './Routes/userRoute.js'
import cors from 'cors'
import connectDb from './utils/db.js'

dotenv.config()



async function  startServer(){
    const app=express()

    app.use(express.json())
    app.use(cors())

    app.use(userRoute)


    connectDb()
  

    const port=process.env.PORT || 8000

    app.listen(port,()=>{
      console.log(`Server STarted on port  ${port}`)
    })

    
}
startServer()