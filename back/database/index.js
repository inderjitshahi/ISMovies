import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/ISMovies')
.then(()=>{
    console.log("db is connected");
})
.catch((err)=>{
    console.log("connection failed",err);
});