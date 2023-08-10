const express = require("express");
const { getPortfolioCategoryData, addPortfolioCategoryData, updatePortfolioCategoryData, deletePortfolioCategoryData } = require("../controllers/portfolioCategoryController");

const portfolioCategoryRoute = express.Router();

portfolioCategoryRoute.get("/porfolio-category", getPortfolioCategoryData); //shows all data
portfolioCategoryRoute.post("/porfolio-category", addPortfolioCategoryData); //creates a data
portfolioCategoryRoute.put("/porfolio-category/:id", updatePortfolioCategoryData); //update a single data
portfolioCategoryRoute.delete("/porfolio-category/:id", deletePortfolioCategoryData); //delete a single data

module.exports = portfolioCategoryRoute;