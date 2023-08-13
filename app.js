//external imports
const express = require("express");

//internal imports
const aboutUsRoute = require("./routes/aboutUsRoute");
const homeRoute = require("./routes/homeRoute");
const expertiseRoute = require("./routes/expertiseRoute");
const footerRoute = require("./routes/footerRoute");
const contactUsRoute = require("./routes/contactUsRoute");
const contactFormRoute = require("./routes/contactFormRoute");
const letsTalkRoute = require("./routes/letsTalkRoute");
const homeContactRoute = require("./routes/homeContactRoute");
const categoryContentRoute = require("./routes/categoryContentRoute");
const portfolioCategoryRoute = require("./routes/portfolioCategoryRoute");
const serviceRoute = require("./routes/serviceRoute");
const productRoute = require("./routes/productRoute");
const productDetailsRoute = require("./routes/productDetailsRoute");
const blogCategoryRoute = require("./routes/blogCategoryRoute");
const blogCategoryContentRoute = require("./routes/blogCategoryContentRoute");

const app = express();
app.use(express.json());

app.use("/api",aboutUsRoute);
app.use("/api",homeRoute);
app.use("/api",expertiseRoute);
app.use("/api",footerRoute); 
app.use("/api",contactUsRoute); 
app.use("/api",contactFormRoute); 
app.use("/api",letsTalkRoute);
app.use("/api",homeContactRoute);
app.use("/api",portfolioCategoryRoute); 
app.use("/api",categoryContentRoute); 
app.use("/api",serviceRoute); 
app.use("/api",productRoute); 
app.use("/api",productDetailsRoute); 
app.use("/api",blogCategoryRoute); 
app.use("/api",blogCategoryContentRoute); 

module.exports = app;