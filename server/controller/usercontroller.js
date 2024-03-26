import user from "../Models/user.js";


export const getUsers=async(req,res)=>{
    try {
        const users=await user.find()
        res.json(users)
    } catch (error) {
        console.log(error.message)
    }
}

export const addUsers=async(req,res)=>{

    try {
        const {name,email,mobile,dob,dateOfjoin,Role,Department}=req.body

     const newUser=new user({name,email,mobile,dob,dateOfjoin,Role,Department})

     await newUser.save()
     res.json({message:"user added successFully"})
    } catch (error) {
        console.log(error.message)
    }
}

export const delteUsers=async(req,res)=>{
    try {
        const userId=req.params.id

        const userDelete=await user.deleteOne({_id:userId})
    res.json({message:"user deleted"})

    } catch (error) {
        console.log(error.message)
    }
}