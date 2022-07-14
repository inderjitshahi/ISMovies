import express  from "express";
import "./database/index.js";
import userRoutes from './routes/user.js';

const app=express();

app.use(express.json());

app.use('/api/user',userRoutes);

app.post('/signIn',(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.json({error:"email/password  missing"});
    }  
    next();
},(req,res,next)=>{
    res.send('<h1>At Home</h1>');
});

app.listen(8000);