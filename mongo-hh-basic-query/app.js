import { MongoClient } from "mongodb";
import { orders } from "./orders.js";

const connectionString = "mongodb://127.0.0.1:27017";

console.log("------- Start connecting to MongDB -------");
export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();
console.log("------- Connecting to MongoDB Successfully -------");

const db = await client.db("practice-mongo");
console.log("------- Create database successfully -------");

try {
  await db.createCollection("pizzaOrders");
  console.log("------- Create collection successfully -------");
} catch {
  console.log("Collection already exists !");
}

const collection = db.collection("pizzaOrders");

await collection.insertMany(
  orders.map((order) => {
    return {
      ...order,
      created_at: new Date(order.created_at),
    };
  })
);

console.log("------- Insert documents successfully -------");

await client.close();
