const express = require("express");
const { getAboutUsData, addAboutUsData, deleteAboutUsData, updateAboutUsData } = require("../controllers/aboutUsController");

const aboutUsRoute = express.Router();

aboutUsRoute.get("/aboutUs", getAboutUsData); //shows all data
aboutUsRoute.post("/aboutUs", addAboutUsData); //creates a data
aboutUsRoute.put("/aboutUs/:id", updateAboutUsData); //update a single data
aboutUsRoute.delete("/aboutUs/:id", deleteAboutUsData); //delete a single data

module.exports = aboutUsRoute; 