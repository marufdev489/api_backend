const express = require("express");
const { getHomeData, addHomeData, updateHomeData, deleteHomeData } = require("../controllers/homeController");

const homeRoute = express.Router();

homeRoute.get("/", getHomeData); //shows all data
homeRoute.post("/", addHomeData); //creates a data
homeRoute.put("/:id", updateHomeData); //update a single data
homeRoute.delete("/:id", deleteHomeData); //delete a single data

module.exports = homeRoute;