const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("database connected sucessfully");
  })
  .catch((err) => {
    console.log("Error in connection");
    console.log(err);
  });
