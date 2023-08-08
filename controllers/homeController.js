const Home = require("../models/Home");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getHomeData = async (req, res) => {
    //Do validate user here if necessary!
    let homeData;
    try{
        homeData = await Home.find(); // Retrieve data from the database
        if (!homeData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ homeData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addHomeData = async (req, res) => {
    try {
        const homeData = await Home.create(req.body);
        if (!homeData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ homeData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateHomeData = async (req, res) => {
    let data = req.body;
    try {
      const homeExists = await Home.findById(req.params.id);
      if (!homeExists) {
        return res.status(404).json({ message: 'About Us entry not found' });
      }
      const homeData = await Home.findByIdAndUpdate(req.params.id, data);
      if (!homeData) {
        return res.status(404).json({ message: 'About Us data not found' });
      }
      return res.status(200).json({ homeData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deleteHomeData = async (req, res) => {
      console.log(req.params.id);
      try {
          const homeData = await Home.findById(req.params.id);
          if (!homeData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
          await Home.findByIdAndRemove(req.params.id);
          return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

module.exports = {getHomeData, addHomeData, updateHomeData, deleteHomeData};