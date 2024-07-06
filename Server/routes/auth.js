import express from "express";
import {signup,Login} from "../controllers/auth.js"

const router=express.Router();
//router.post("/login",login);
router.post("/signup", signup);
router.post("/login",Login)
export default router;
