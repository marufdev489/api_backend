const express = require("express");
const { getBlogPageData, addBlogPageData, updateBlogPageData, deleteBlogPageData } = require("../controllers/blogPageController");

const blogPageRoute = express.Router();

blogPageRoute.get("/blog", getBlogPageData); //shows all data
blogPageRoute.post("/blog", addBlogPageData); //creates a data
blogPageRoute.put("/blog/:id", updateBlogPageData); //update a single data
blogPageRoute.delete("/blog/:id", deleteBlogPageData); //delete a single data

module.exports = blogPageRoute;