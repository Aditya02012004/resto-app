// src/app/api/mongo-connect.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req, res) {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    res.status(200).json({ message: "Successfully connected to MongoDB!" });
  } catch (error) {
    console.error("Connection error:", error);
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  } finally {
    await client.close();
  }
}
