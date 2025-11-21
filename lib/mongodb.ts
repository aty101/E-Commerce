import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options: MongoClientOptions = {};

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Global is used here to maintain a cached connection across hot reloads
// in development. This prevents connections from growing too large.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production it's best to avoid the global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
