const express = require("express");

const app = express();
app.use(express.json());

//internal imports
const aboutUsRoute = require("./routes/aboutUsRoute");
const homeRoute = require("./routes/homeRoute");
const expertiseRoute = require("./routes/expertiseRoute");

app.use("/api",aboutUsRoute);
app.use("/api",homeRoute);
app.use("/api",expertiseRoute);

module.exports = app;