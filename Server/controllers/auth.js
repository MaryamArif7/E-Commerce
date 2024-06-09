import bcrypt from "bcrypt";
import User from "../models/User.js";
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