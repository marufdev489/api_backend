const Footer = require("../models/Footer");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getFooterData = async (req, res) => {
    //Do validate user here if necessary!
    let footerData;
    try{
        footerData = await Footer.find(); // Retrieve data from the database
        if (!footerData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ footerData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addFooterData = async (req, res) => {
    try {
        const footerData = await Footer.create(req.body);
        if (!footerData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ footerData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateFooterData = async (req, res) => {
    let data = req.body;
    try {
      const footerExists = await Footer.findById(req.params.id);
      if (!footerExists) {
        return res.status(404).json({ message: 'About Us entry not found' });
      }
      const footerData = await Footer.findByIdAndUpdate(req.params.id, data);
      if (!footerData) {
        return res.status(404).json({ message: 'Failed to update!' });
      }
      return res.status(200).json({ footerData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deleteFooterData = async (req, res) => {
      try {
          const footerData = await Footer.findById(req.params.id);
          if (!footerData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
          await Footer.findByIdAndRemove(req.params.id);
          return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

module.exports = {getFooterData, addFooterData, updateFooterData, deleteFooterData};