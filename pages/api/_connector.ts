import { MongoClient } from 'mongodb';

let cachedDb;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("create new connection...")
  cachedDb = client;
  return await client.connect();
}