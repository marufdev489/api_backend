const express = require("express");
const { getBlogCategoryData, addBlogCategoryData, updateBlogCategoryData, deleteBlogCategoryData } = require("../controllers/blogCategoryController");

const blogCategoryRoute = express.Router();

blogCategoryRoute.get("/blog-category", getBlogCategoryData); //shows all data
blogCategoryRoute.post("/blog-category", addBlogCategoryData); //creates a data
blogCategoryRoute.put("/blog-category/:id", updateBlogCategoryData); //update a single data
blogCategoryRoute.delete("/blog-category/:id", deleteBlogCategoryData); //delete a single data

module.exports = blogCategoryRoute;