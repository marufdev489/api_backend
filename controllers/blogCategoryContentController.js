const BlogCategoryContent = require("../models/BlogCategoryContent");
const BlogCategory = require("../models/BlogCategory");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getAllCategoryContentData = async (req, res) => {
    //Do validate user here if necessary!
    let contentData;
    try{
        contentData = await BlogCategoryContent.find(); // Retrieve data from the database
        if (!contentData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ contentData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addCategoryContentUnderSingleCategory = async (req, res) => {
    try {
        //check if category exists!
        const categoryExists = await BlogCategory.findById(req.params.categoryId); //get the category
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const contentData = await BlogCategoryContent.create(req.body); //adds content data to CategoryContent Document
        if (!contentData) {
            return res.status(500).json({ message: 'Failed to create contentData data' });
        }

        categoryExists.contents.push(contentData); //adding content data to that specific category
        await categoryExists.save(); //finally saving the document
        return res.status(201).json({ contentData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add contentData data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateCategoryContentUnderSingleCategory = async (req, res) => {
    try {
      //check if category exists!
      const categoryExists = await BlogCategory.findById(req.params.categoryId);
      if (!categoryExists) {
        return res.status(404).json({ message: 'Category not found' });
      }
      //find the content within the category
      const contentIndex = categoryExists.contents.findIndex(contentId =>
        contentId.toString() === req.params.contentId
      );
      if (contentIndex === -1) {
        return res.status(404).json({ error: 'Content not found in category' });
      }
      //update content property in CategoryContent document
      const updatedContent = await BlogCategoryContent.findByIdAndUpdate(
        req.params.contentId,
        req.body,
        { new: true } // To return the updated content
      );
      // Update the content within the category
      categoryExists.contents[contentIndex] = updatedContent._id;
        await categoryExists.save();
      return res.status(200).json({ updatedContent });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
const deleteCategoryContentUnderSingleCategory = async (req, res) => {
      try {
        //check if category exists!
        const categoryExists = await BlogCategory.findById(req.params.categoryId);
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found' });
        }
        //find the content within the category
        const contentIndex = categoryExists.contents.findIndex(contentId =>
            contentId.toString() === req.params.contentId
        );
        if (contentIndex === -1) {
            return res.status(404).json({ error: 'Content not found in category' });
        }
        categoryExists.contents.pop(contentIndex);
           await categoryExists.save();
           await CategoryContent.findByIdAndRemove(req.params.contentId);
           return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

//show contents of a individual category!
const getContentOfIndividualCategory = async (req, res) =>{
    try{
        const categoryContent = await BlogCategory.findById(req.params.categoryId).populate("contents");
        if (!categoryContent) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ categoryContent });
    }catch(err){
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCategoryContentData,
    addCategoryContentUnderSingleCategory,
    updateCategoryContentUnderSingleCategory,
    deleteCategoryContentUnderSingleCategory,
    getContentOfIndividualCategory
};