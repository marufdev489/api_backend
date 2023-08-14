const BlogPage = require("../models/BlogPage");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getBlogPageData = async (req, res) => {
    //Do validate user here if necessary!
    let blogPageData;
    try{
        blogPageData = await BlogPage.find(); // Retrieve data from the database
        if (!blogPageData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ blogPageData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addBlogPageData = async (req, res) => {
    try {
        const blogPageData = await BlogPage.create(req.body);
        if (!blogPageData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ blogPageData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateBlogPageData = async (req, res) => {
    let data = req.body;
    try {
      const dataExists = await BlogPage.findById(req.params.id);
      if (!dataExists) {
        return res.status(404).json({ message: 'About Us entry not found' });
      }
      const blogPageData = await BlogPage.findByIdAndUpdate(req.params.id, data);
      if (!blogPageData) {
        return res.status(404).json({ message: 'Failed to update!' });
      }
      return res.status(200).json({ blogPageData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deleteBlogPageData = async (req, res) => {
      try {
          const blogPageData = await BlogPage.findById(req.params.id);
          if (!blogPageData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
          await BlogPage.findByIdAndRemove(req.params.id);
          return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

module.exports = {getBlogPageData, addBlogPageData, updateBlogPageData, deleteBlogPageData};