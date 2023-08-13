const express = require("express");
const { getServiceData, addServiceData, updateServiceData, deleteServiceData } = require("../controllers/serviceController");

const serviceRoute = express.Router();

serviceRoute.get("/service", getServiceData); //shows all data
serviceRoute.post("/service", addServiceData); //creates a data
serviceRoute.put("/service/:id", updateServiceData); //update a single data
serviceRoute.delete("/service/:id", deleteServiceData); //delete a single data

module.exports = serviceRoute;