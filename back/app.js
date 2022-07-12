import express  from "express";
import userRoutes from './routes/user.js';

const app=express();



app.use(userRoutes);
app.get('/',(req,res,next)=>{
    res.send('<h1>At Home</h1>');
});

app.listen(8000);