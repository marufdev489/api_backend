const express = require("express");
const { getHomeContactData, addHomeContactData } = require("../controllers/homeContactController");

const homeContactRoute = express.Router();

homeContactRoute.get("/home-contact", getHomeContactData); //shows all data
homeContactRoute.post("/home-contact", addHomeContactData); //creates a data

module.exports = homeContactRoute;