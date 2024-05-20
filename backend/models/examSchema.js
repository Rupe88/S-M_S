const mongoose=require("mongoose");
const examSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    registrationNumber:{
        type:String,
        required:true
    },
    className:{
        type:String,
        required:true
    }
    ,
    marks:{
        type:Number,
        require:true
    }

}, {timestamps:true});

const Exam= mongoose.model("Exam", examSchema);
module.exports=Exam;