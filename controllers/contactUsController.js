const ContactUs = require("../models/ContactUs");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getContactUsData = async (req, res) => {
    //Do validate user here if necessary!
    let contactUsData;
    try{
        contactUsData = await ContactUs.find(); // Retrieve data from the database
        if (!contactUsData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ contactUsData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addContactUsData = async (req, res) => {
    try {
        const contactUsData = await ContactUs.create(req.body);
        if (!contactUsData) {
            return res.status(500).json({ message: 'Failed to create contact us data' });
        }
        return res.status(201).json({ contactUsData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add contact-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateContactUsData = async (req, res) => {
    let data = req.body;
    try {
      const dataExists = await ContactUs.findById(req.params.id);
      if (!dataExists) {
        return res.status(404).json({ message: 'Contact Us entry not found' });
      }
      const contactUsData = await ContactUs.findByIdAndUpdate(req.params.id, data);
      if (!contactUsData) {
        return res.status(404).json({ message: 'Failed to update!' });
      }
      return res.status(200).json({ contactUsData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
const deleteContactUsData = async (req, res) => {
      console.log(req.params.id);
      try {
          const contactUsData = await ContactUs.findById(req.params.id);
          if (!contactUsData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
          await ContactUs.findByIdAndRemove(req.params.id);
          return res.status(200).json({ message: 'Successfully Deleted!' });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: error.message });
      }
};

module.exports = {getContactUsData, addContactUsData, updateContactUsData, deleteContactUsData};