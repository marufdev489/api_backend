const express = require("express");
const { getLetsTalkData, addLetsTalkData } = require("../controllers/letsTalkController");

const letsTalkRoute = express.Router();

letsTalkRoute.get("/lets-talk", getLetsTalkData); //shows all data
letsTalkRoute.post("/lets-talk", addLetsTalkData); //creates a data

module.exports = letsTalkRoute;