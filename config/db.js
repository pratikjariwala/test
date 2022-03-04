const mongoose = require("mongoose");
const config = require("config");
const dbURI = config.get("mongoURI");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
    });
    console.log("CONNECTED");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
