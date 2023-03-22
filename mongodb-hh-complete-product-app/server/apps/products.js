import { Router } from "express";
import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const name = req.query.keywords;
    const category = req.query.category;
    const query = {};
    if (name) {
      query.name = new RegExp(name, "i");
    }

    if (category) {
      query.category = new RegExp(category, "i");
    }
    console.log(query);
    const collection = db.collection("products");
    const allProducts = await collection.find(query).limit(10).toArray();
    return res.json({ data: allProducts });
  } catch (error) {
    console.log(error);
  }
});

productRouter.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("products");
    const productId = new ObjectId(req.params.id);

    const productById = await collection.findOne({ _id: productId });

    return res.json({ data: productById });
  } catch (error) {
    console.log(error);
  }
});

productRouter.post("/", async (req, res) => {
  try {
    const collection = db.collection("products");
    const productData = { ...req.body, created_at: new Date() };
    const newProductData = await collection.insertOne(productData);
    return res.json({
      message: `Product Id ${newProductData.insertedId} has been created successfully`,
    });
  } catch (error) {
    console.log(error);
  }
});

productRouter.put("/:id", async (req, res) => {
  try {
    const collection = db.collection("products");
    // นำข้อมูลที่ส่งมาใน Request Body ทั้งหมด Assign ใส่ลงไปใน Variable ที่ชื่อว่า `newProductData`
    const newProductData = { ...req.body, modified_at: new Date() };

    //Update ข้อมูลใน Database โดยใช้ `collection.updateOne(query)` โดยการ
    // นำ productId จาก Endpoint parameter มา Assign ลงใน Variable `productId`
    // โดยที่ใช้ ObjectId ที่ Import มาจากด้านบน ในการ Convert Type ด้วย
    const productId = new ObjectId(req.params.id);
    console.log(productId);
    const updatedProductData = await collection.updateOne(
      {
        _id: productId,
      },
      {
        $set: newProductData,
      }
    );
    return res.json({
      message: `Movie record ${productId} has been updated successfully`,
    });
  } catch (error) {
    console.log(error);
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const collection = db.collection("products");
    const productId = new ObjectId(req.params.id);
    await collection.deleteOne({ _id: productId });

    return res.json({
      message: `Movie record ${productId} has been deleted successfully`,
    });
  } catch (error) {
    console.log(error);
  }
});

export default productRouter;
