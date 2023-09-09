import express from "express";
import userRouter from "./routers/user.js";
import {config} from "dotenv"

export const app=express();

config({
    path:"./data/config.env",
})

// Using middleware
app.use(express.json());
app.use(userRouter);

app.get("/",(req,res)=>{
    res.send("nice working");
});
