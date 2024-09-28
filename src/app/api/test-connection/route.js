// src/app/api/test-connection/route.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function GET(req) {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
    return new Response(JSON.stringify({ message: "Successfully connected to MongoDB!" }), { status: 200 });
  } catch (error) {
    console.error("Connection error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to MongoDB" }), { status: 500 });
  } finally {
    await client.close();
  }
}