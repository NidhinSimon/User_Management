import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    dateOfjoin:{
        type:Date,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        
    },
    Role:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },


})
const user=mongoose.model("user",UserSchema)
export default user