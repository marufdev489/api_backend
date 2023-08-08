const express = require("express");

const app = express();
app.use(express.json());

//internal imports
const aboutUsRoute = require("./routes/aboutUsRoute");
const homeRoute = require("./routes/homeRoute");

app.use("/api",aboutUsRoute);
app.use("/api",homeRoute);

module.exports = app;