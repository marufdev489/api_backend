const express = require("express");
const { getProductDetailsData, addProductDetailsData, updateProductDetailsData, deleteProductDetailsData } = require("../controllers/productDetailsController");

const productDetailsRoute = express.Router();

productDetailsRoute.get("/product-details", getProductDetailsData); //shows all data
productDetailsRoute.post("/product-details", addProductDetailsData); //creates a data
productDetailsRoute.put("/product-details/:id", updateProductDetailsData); //update a single data
productDetailsRoute.delete("/product-details/:id", deleteProductDetailsData); //delete a single data

module.exports = productDetailsRoute;