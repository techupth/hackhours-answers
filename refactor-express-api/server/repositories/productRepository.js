import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

const collection = db.collection("products");

const ProductRepository = {
  findAll: async (query = {}) => {
    return await collection.find(query).limit(10).toArray();
  },

  findById: async (id) => {
    return await collection.findOne({ _id: new ObjectId(id) });
  },

  create: async (productData) => {
    return await collection.insertOne(productData);
  },

  update: async (id, productData) => {
    return await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: productData }
    );
  },

  delete: async (id) => {
    return await collection.deleteOne({ _id: new ObjectId(id) });
  },
};

export default ProductRepository;
