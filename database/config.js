const mongoose = require("mongoose");

const dbConnection = async () => {
  console.log(process.env.MONGODB_CNN);
  try {
    mongoose.connect(process.env.MONGODB_CNN);
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    throw new Error("Database initialization error");
  }
};

module.exports = dbConnection;
