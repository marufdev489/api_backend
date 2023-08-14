const express = require("express");
const { getAllCategoryContentData, addCategoryContentUnderSingleCategory, updateCategoryContentUnderSingleCategory, deleteCategoryContentUnderSingleCategory, getContentOfIndividualCategory } = require("../controllers/blogCategoryContentController");

const blogCategoryContentRoute = express.Router();

blogCategoryContentRoute.get("/blog-category-content", getAllCategoryContentData); //shows all data
blogCategoryContentRoute.get("/blog-category-content/:categoryId", getContentOfIndividualCategory); //shows only individual category data
blogCategoryContentRoute.post("/blog-category-content/:categoryId", addCategoryContentUnderSingleCategory); //creates a data
blogCategoryContentRoute.put("/blog-category-content/:categoryId/content/:contentId", updateCategoryContentUnderSingleCategory); //update a single data
blogCategoryContentRoute.delete("/blog-category-content/:categoryId/content/:contentId", deleteCategoryContentUnderSingleCategory); //delete a single data

module.exports = blogCategoryContentRoute;