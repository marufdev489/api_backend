const express = require("express");
const { getContactFormData, addContactFormData } = require("../controllers/contactFormController");

const contactFormRoute = express.Router();

contactFormRoute.get("/contact-form", getContactFormData); //shows all data
contactFormRoute.post("/contact-form", addContactFormData); //creates a data

module.exports = contactFormRoute;