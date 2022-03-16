import { MongoClient } from "mongodb";
require("dotenv").config();
const connnectionString = process.env.MONGODB_URL;
console.log("connnectionString", connnectionString);

export const connnectDatabase = async () => {
  const client = new MongoClient(connnectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  try {
    await client.connect();

    await listDatabases(client);
    console.log("...MongoDB has been connecting.....");
  } finally {
    await client.close();
  }
};

const listDatabases = async (client) => {
  const databases = await client.db().admin().listDatabases();
  console.log("list db", databases);
  databases.databases.forEach((item) => console.log(` - ${item.name}`));
};
