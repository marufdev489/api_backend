const express = require("express");
const { getFooterData, addFooterData, updateFooterData, deleteFooterData } = require("../controllers/footerController");

const footerRoute = express.Router();

footerRoute.get("/footer", getFooterData); //shows all data
footerRoute.post("/footer", addFooterData); //creates a data
footerRoute.put("/footer/:id", updateFooterData); //update a single data
footerRoute.delete("/footer/:id", deleteFooterData); //delete a single data

module.exports = footerRoute;