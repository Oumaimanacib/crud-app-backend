const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

// get all products
router.get("/api/product", getProducts);

// get a product by id
router.get("/api/product/:id", getProduct);

// create a product
router.post("/api/product", createProduct);

// update a product by id
router.put("/api/product/:id", updateProduct);

// delete a product by id
router.delete("/api/product/:id", deleteProduct);

module.exports = router;
