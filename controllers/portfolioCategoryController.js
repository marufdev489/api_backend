const PortfolioCategory = require("../models/PortfolioCategory");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getPortfolioCategoryData = async (req, res) => {
    //Do validate user here if necessary!
    let categoryData;
    try{
        categoryData = await PortfolioCategory.find(); // Retrieve data from the database
        if (!categoryData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ categoryData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addPortfolioCategoryData = async (req, res) => {
    try {
        const categoryData = await PortfolioCategory.create(req.body);
        if (!categoryData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ categoryData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updatePortfolioCategoryData = async (req, res) => {
    let data = req.body;
    try {
      const categoryDataExists = await PortfolioCategory.findById(req.params.id);
      if (!categoryDataExists) {
        return res.status(404).json({ message: 'categoryData entry not found' });
      }
      const categoryData = await PortfolioCategory.findByIdAndUpdate(req.params.id, data);
      if (!categoryData) {
        return res.status(404).json({ message: 'categoryData data not found' });
      }
      return res.status(200).json({ categoryData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deletePortfolioCategoryData = async (req, res) => {
      try {
          const categoryData = await PortfolioCategory.findById(req.params.id);
          if (!categoryData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
          await PortfolioCategory.findByIdAndRemove(req.params.id);
          return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

module.exports = {getPortfolioCategoryData, addPortfolioCategoryData, updatePortfolioCategoryData, deletePortfolioCategoryData};