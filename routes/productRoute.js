const express = require("express");
const { getProductData, addProductData, updateProductData, deleteProductData } = require("../controllers/productController");

const productRoute = express.Router();

productRoute.get("/product", getProductData); //shows all data
productRoute.post("/product", addProductData); //creates a data
productRoute.put("/product/:id", updateProductData); //update a single data
productRoute.delete("/product/:id", deleteProductData); //delete a single data

module.exports = productRoute;