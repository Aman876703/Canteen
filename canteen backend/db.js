var mongoose = require("mongoose");
var cn  = mongoose.connect("mongodb://localhost:27017/canteen").then(()=>{
    console.log("Connected to mongodb")
}).catch((err)=>{
    console.error("Error while connecting")
})
module.exports = cn;

