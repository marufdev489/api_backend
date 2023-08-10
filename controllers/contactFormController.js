const ContactForm = require("../models/ContactForm");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getContactFormData = async (req, res) => {
    //Do validate user here if necessary!
    let contactFormData;
    try{
        contactFormData = await ContactForm.find(); // Retrieve data from the database
        if (!contactFormData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ contactFormData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addContactFormData = async (req, res) => {
    try {
        const contactFormData = await ContactForm.create(req.body);
        if (!contactFormData) {
            return res.status(500).json({ message: 'Failed to create contact us data' });
        }
        return res.status(201).json({ contactFormData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add contact-us data. Please try again later.' });
    }
};



module.exports = {getContactFormData, addContactFormData };