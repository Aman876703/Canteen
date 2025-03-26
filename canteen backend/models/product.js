const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productid: String,
  productname: String,
  price: String,
  productimage: String,
  description: String,
  type: String
});

module.exports = mongoose.model("Product", productSchema); 
