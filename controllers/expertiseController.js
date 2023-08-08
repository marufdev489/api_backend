const Expertise = require("../models/Expertise");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getExpertiseData = async (req, res) => {
    //Do validate user here if necessary!
    let expertiseData;
    try{
        expertiseData = await Expertise.find(); // Retrieve data from the database
        if (!expertiseData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ expertiseData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addExpertiseData = async (req, res) => {
    try {
        const expertiseData = await Expertise.create(req.body);
        if (!expertiseData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ expertiseData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateExpertiseData = async (req, res) => {
    let data = req.body;
    try {
      const expertiseExists = await Expertise.findById(req.params.id);
      if (!expertiseExists) {
        return res.status(404).json({ message: 'About Us entry not found' });
      }
      const expertiseData = await Expertise.findByIdAndUpdate(req.params.id, data);
      if (!expertiseData) {
        return res.status(404).json({ message: 'Failed to update!' });
      }
      return res.status(200).json({ expertiseData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deleteExpertiseData = async (req, res) => {
      console.log(req.params.id);
      try {
          const expertiseData = await Expertise.findById(req.params.id);
          if (!expertiseData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
          await Expertise.findByIdAndRemove(req.params.id);
          return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

module.exports = {getExpertiseData, addExpertiseData, updateExpertiseData, deleteExpertiseData};