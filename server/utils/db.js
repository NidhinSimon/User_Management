import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connectDb=async()=>{
    try {
        if(!process.env.MONGO_URL)
        {
            throw new Error("MOngo url is not defined ")
        }
          const url=process.env.MONGO_URL
        const conn=await mongoose.connect(url)
       console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
        
    } catch (error) {
        (error.message)
    }
}

export default connectDb;