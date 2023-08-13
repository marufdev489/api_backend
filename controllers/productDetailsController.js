const ProductDetail = require("../models/ProductDetails");

/* This function retrieves the data for the About Us page from the database and returns it as a JSON object. */
const getProductDetailsData = async (req, res) => {
    //Do validate user here if necessary!
    let productData;
    try{
        productData = await ProductDetail.find(); // Retrieve data from the database
        if (!productData) return res.status(500).json({ message: "Internal server error: No data found in the database." }); // Handle case when no data is found
        return res.status(200).json({ productData });
    } catch (error){
        console.error(error); 
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

// This function creates a new About Us entry in the database using the request body data.
const addProductDetailsData = async (req, res) => {
    try {
        const productData = await ProductDetail.create(req.body);
        if (!productData) {
            return res.status(500).json({ message: 'Failed to create about us data' });
        }
        return res.status(201).json({ productData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to add about-us data. Please try again later.' });
    }
};

// This function updates the About Us entry in the database using the request params data.
const updateProductDetailsData = async (req, res) => {
    let data = req.body;
    try {
      const productDataExists = await ProductDetail.findById(req.params.id);
      if (!productDataExists) {
        return res.status(404).json({ message: 'Product entry not found' });
      }
      const productData = await ProductDetail.findByIdAndUpdate(req.params.id, data);
      if (!productData) {
        return res.status(404).json({ message: 'Failed to update!' });
      }
      return res.status(200).json({ productData });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
};
  
// This function deletes the About Us entry in the database using the request params data.
  const deleteProductDetailsData = async (req, res) => {
    try {
        const productData = await ProductDetail.findById(req.params.id);
        if (!productData) return res.status(500).json({ message: "Internal server error: No data found in the database regarding this id." });
        await ProductDetail.findByIdAndRemove(req.params.id);
        return res.status(200).json({ message: 'Successfully Deleted!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { getProductDetailsData, addProductDetailsData, updateProductDetailsData, deleteProductDetailsData };