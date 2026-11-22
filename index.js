

import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToMongoDB from "./config/db.js";


const app = express();
const PORT = process.env.PORT || 5000;



// middleware
app.use(cors());
app.use(express.json());


// Home route - Check whether server is running
app.get("/", (req, res) => {
  res.send({
    message: "WedPlan server is running!",
  });
});









// Start server connect
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectToMongoDB();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message || error);
    console.log("Tip: Check your MongoDB Atlas username and password in .env");
  }

  // Start Express server
  app.listen(PORT, () => {
    console.log(`WedPlan server is running on port ${PORT}`);
  });
};

startServer();


export default app;
