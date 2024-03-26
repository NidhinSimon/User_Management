import express from "express";
import { addUsers, getUsers,delteUsers } from "../controller/usercontroller.js";



const userRoute=express.Router()


userRoute.get('/users',getUsers)
userRoute.post('/add',addUsers)
userRoute.delete("/delete/:id",delteUsers)
export default userRoute

