const HomeContact = require("../models/HomeContact");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getHomeContactData = async (req, res) => {
    //Do validate user here if necessary!
    let homeContactData;
    try{ 
        homeContactData = await HomeContact.find(); // Retrieve data from the database
        if (!homeContactData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ homeContactData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addHomeContactData = async (req, res) => {
    try {
        const homeContactData = await HomeContact.create(req.body);
        if (!homeContactData) {
            return res.status(500).json({ message: 'Failed to create contact us data' });
        }
        return res.status(201).json({ homeContactData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add contact-us data. Please try again later.' });
    }
};

module.exports = {getHomeContactData, addHomeContactData };