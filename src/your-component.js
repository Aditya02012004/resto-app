// src/app/your-component.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

async function getMongoData() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    const data = await client.db("yourDatabase").collection("yourCollection").find().toArray();
    return data;
  } finally {
    await client.close();
  }
}

const YourComponent = async () => {
  const data = await getMongoData();

  return (
    <div>
      {/* Render your data here */}
      {JSON.stringify(data)}
    </div>
  );
};

export default YourComponent;
