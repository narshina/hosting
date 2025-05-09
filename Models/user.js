import mongoose from "mongoose";

let usershema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   age:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

const user=mongoose.model('user',usershema);
export default user;