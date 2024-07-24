import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken"
export const signup=async (req,res)=>{
    try{
        const{name,
            email,
            password,
        }=req.body;
        const salt=await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const user=new User({
            name,
            email,
            password:passwordHash,
        });
        const savedUser=await user.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
   

}
export const Login=async (req,res)=>{
    try{
        const{
            email,
            password,
        }=req.body;
        const user= await User.findOne({email:email}  )
        if(!email){
            res.status(400).json({message:"User not exisit ,Signup first"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:"Invalid Password"})
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ user, token });
        delete user.password;
        res.status(200).json({ user });
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
   

}