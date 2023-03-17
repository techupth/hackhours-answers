// Exercise #6
// Update ข้อมูล Document ของ Customer ที่มีชื่อว่า Jack โดยที่ทุก Document ต้องมี Key และ Value Pair ดังนี้
//{ "isAdmin": false }

db.pizzaOrders.updateMany(
  { customer_name: "Jack" },
  { $set: { isAdmin: false } }
);

// Update ข้อมูลที่มี Property country และ Value เป็น Thailand เข้าไปในทุกๆ Document ด้วย updateMany

db.pizzaOrders.updateMany({}, { $set: { country: "Thailand" } });

// - Update ข้อมูล Document ของ Customer ที่มีชื่อว่า `M` ด้วย `updateOne` แต่ถ้าไม่มีในระบบก็ให้สร้างมาเป็น Document ใหม่

db.pizzaOrders.updateOne(
  {
    customer_name: "M",
  },
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  },
  {
    upsert: true,
  }
);
