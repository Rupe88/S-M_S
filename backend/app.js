const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})