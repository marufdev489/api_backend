const express = require("express");
const { getAboutUsData, addAboutUsData, deleteAboutUsData, updateAboutUsData } = require("../controllers/aboutUsController");

const aboutUsRoute = express.Router();

aboutUsRoute.get("/aboutUs", getAboutUsData);
aboutUsRoute.post("/aboutUs", addAboutUsData);
aboutUsRoute.put("/aboutUs/:id", updateAboutUsData);
aboutUsRoute.delete("/aboutUs/:id", deleteAboutUsData);

module.exports = aboutUsRoute;