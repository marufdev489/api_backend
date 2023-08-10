const express = require("express");
const { getContactUsData, addContactUsData, updateContactUsData, deleteContactUsData } = require("../controllers/contactUsController");

const contactUsRoute = express.Router();

contactUsRoute.get("/contactUs", getContactUsData); //shows all data
contactUsRoute.post("/contactUs", addContactUsData); //creates a data
contactUsRoute.put("/contactUs/:id", updateContactUsData); //update a single data
contactUsRoute.delete("/contactUs/:id", deleteContactUsData); //delete a single data

module.exports = contactUsRoute;