const mongoose = require("mongoose");
require("dotenv").config();

const mongo_URI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongo_URI);
    if (connection) {
      console.log("Database Connected");
    }
  } catch (error) {
    console.log("Error connecting to database ", error);
  }
};

module.exports = { initializeDatabase };
