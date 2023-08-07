const mongoose = require("mongoose");
const AboutUs = require("../models/AboutUs");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getAboutUsData = async (req, res) => {
    //Do validate user here if necessary!
    let aboutUsData;
    try{
        aboutUsData = await AboutUs.find(); // Retrieve data from the database
        if (!aboutUsData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ aboutUsData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addAboutUsData = async (req, res) => {
    try {
        const aboutUsData = await AboutUs.create(req.body);
        if (!aboutUsData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ aboutUsData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateAboutUsData = async (req, res) => {
  let data = req.body;
  try {
    const aboutUsExists = await AboutUs.findById(req.params.id);
    if (!aboutUsExists) {
      return res.status(404).json({ message: 'About Us entry not found' });
    }
    const aboutUsData = await AboutUs.findByIdAndUpdate(req.params.id, data);
    if (!aboutUsData) {
      return res.status(404).json({ message: 'About Us data not found' });
    }
    return res.status(200).json({ aboutUsData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// This function deletes the About Us entry in the database using the request params data.
const deleteAboutUsData = async (req, res) => {
    console.log(req.params.id);
    try {
        const aboutUsData = await AboutUs.findById(req.params.id);
        if (!aboutUsData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
        await AboutUs.findByIdAndRemove(req.params.id);
        return res.status(200).json({ message: 'Successfully Deleted!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {getAboutUsData, addAboutUsData, updateAboutUsData, deleteAboutUsData};