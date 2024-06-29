const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
  },

  quantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
  },

  Image: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
