const mongoose = require("mongoose");

const mongoConnect = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("Database Connected!"))
    .catch((err)=> console.log(err));
}

module.exports = mongoConnect;