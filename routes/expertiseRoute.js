const express = require("express");
const { getExpertiseData, addExpertiseData, updateExpertiseData, deleteExpertiseData } = require("../controllers/expertiseController");

const expertiseRoute = express.Router();

expertiseRoute.get("/expertise", getExpertiseData); //shows all data
expertiseRoute.post("/expertise", addExpertiseData); //creates a data
expertiseRoute.put("/expertise/:id", updateExpertiseData); //update a single data
expertiseRoute.delete("/expertise/:id", deleteExpertiseData); //delete a single data

module.exports = expertiseRoute;