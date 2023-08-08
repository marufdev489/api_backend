const express = require("express");

const app = express();
app.use(express.json());

//internal imports
const aboutUsRoute = require("./routes/aboutUsRoute");
const homeRoute = require("./routes/homeRoute");
const expertiseRoute = require("./routes/expertiseRoute");
const footerRoute = require("./routes/footerRoute");

app.use("/api",aboutUsRoute);
app.use("/api",homeRoute);
app.use("/api",expertiseRoute);
app.use("/api",footerRoute);

module.exports = app;