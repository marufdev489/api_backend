const Service = require("../models/Service");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getServiceData = async (req, res) => {
    //Do validate user here if necessary!
    let serviceData;
    try{
        serviceData = await Service.find(); // Retrieve data from the database
        if (!serviceData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ serviceData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addServiceData = async (req, res) => {
    try {
        const serviceData = await Service.create(req.body);
        if (!serviceData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ serviceData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateServiceData = async (req, res) => {
    let data = req.body;
    try {
      const serviceExists = await Service.findById(req.params.id);
      if (!serviceExists) {
        return res.status(404).json({ message: 'Service entry not found' });
      }
      const serviceData = await Service.findByIdAndUpdate(req.params.id, data);
      if (!serviceData) {
        return res.status(404).json({ message: 'Failed to update!' });
      }
      return res.status(200).json({ serviceData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deleteServiceData = async (req, res) => {
    try {
        const serviceData = await Service.findById(req.params.id);
        if (!serviceData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
        await Service.findByIdAndRemove(req.params.id);
        return res.status(200).json({ message: 'Successfully Deleted!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {getServiceData, addServiceData, updateServiceData, deleteServiceData};