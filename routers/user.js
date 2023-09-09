import express from "express";
import { User } from "../models/users.js";
import { getAllUsers, register } from "../controllers/new.js";

const router=express.Router();

router.get("/users/all",getAllUsers);

router.post("/users/new",register);

export default router;