var mongoose=require("mongoose")
var userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        match:/@/
    },
    mobileno:{
        type:String,
        required:true,
        match:/^[0-9]{10}$/
    },
    registerno:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})
var user=mongoose.model('user',userschema)
module.exports=user;