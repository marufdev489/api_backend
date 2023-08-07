const express = require("express");

const app = express();
app.use(express.json());

//routes importing
const aboutUsRoute = require("./routes/aboutUsRoute");

app.use("/api",aboutUsRoute);

module.exports = app;