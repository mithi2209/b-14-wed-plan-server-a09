

// MongoDB connection



import { MongoClient} from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

const connectToMongoDB = async () => {
  try {
    await client.connect();

    console.log("Successfully connected to MongoDB!");

    const db = client.db(process.env.DB_NAME);

    return db;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

export default connectToMongoDB;
