import { User } from "../models/users.js" 

export const getAllUsers=async(req,res)=>{

    const users=await User.find({});

    const keyword=req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
}

export const register=async(req,res)=>{

    const {name,email,password}=req.body;

    await User.create({
        name,
        email,
        password
    });

    res.status(201).cookie("tempi","lol").json({
        success: true,
        message:"Registered Successfully",
    })
}