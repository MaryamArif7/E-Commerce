import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv  from "dotenv";

import morgan  from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import authRoutes from "./routes/auth.js"
import User from "./models/User.js";
import { signup } from "./controllers/auth.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({policy:"unsafe-none"}));

app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
/*Routes */
app.use("/auth",authRoutes);
/*mongoose */
const PORT=process.env.PORT||3000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,


})


.then(()=>{
    app.listen(PORT,()=>console.log(`Server Started:${PORT}`));
})
.catch((error)=>console.log(`${error} did not connected `));