const express = require("express");
const { getAllCategoryContentData, addCategoryContentUnderSingleCategory, updateCategoryContentUnderSingleCategory, deleteCategoryContentUnderSingleCategory, getContentOfIndividualCategory } = require("../controllers/categoryContentController");

const categoryContentRoute = express.Router();

categoryContentRoute.get("/category-content", getAllCategoryContentData); //shows all data
categoryContentRoute.get("/category-content/:categoryId", getContentOfIndividualCategory); //shows only individual category data
categoryContentRoute.post("/category-content/:categoryId", addCategoryContentUnderSingleCategory); //creates a data
categoryContentRoute.put("/category-content/:categoryId/content/:contentId", updateCategoryContentUnderSingleCategory); //update a single data
categoryContentRoute.delete("/category-content/:categoryId/content/:contentId", deleteCategoryContentUnderSingleCategory); //delete a single data

module.exports = categoryContentRoute;