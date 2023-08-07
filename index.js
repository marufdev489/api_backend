const app = require("./app");
const dotenv = require("dotenv");
const mongoConnect = require("./config/dbConnection");

dotenv.config({path:"config/config.env"});

//db connection
mongoConnect();

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on  http://localhost:${process.env.PORT}`);
})