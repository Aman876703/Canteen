const mongoose=require("mongoose")
const cartSchema=new mongoose.Schema({
    emailid:String,
    productid:String,
    qty:Number,
    amt:Number
})
var Cart=mongoose.model('Cart',cartSchema)
module.exports=Cart
