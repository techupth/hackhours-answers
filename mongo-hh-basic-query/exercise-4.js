// Exercise #4
// - Query ข้อมูล Order ที่มีการสั่งจำนวนถาดน้อยกว่า 5 ถาด และจ่ายเงินด้วย Credit Card ของ `mastercard`
db.pizzaOrders
  .find(
    {
      $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
    },
    { customer_name: 1, quantity: 1, credit_card_type: 1 }
  )
  .sort({ quantity: 1 });

// - Query ข้อมูล Order ที่สั่งซื้อ Pizza ขนาดเล็ก และมีจำนวนถาด 1 - 5 ถาด
db.pizzaOrders.find(
  {
    $and: [
      { size: "small" },
      { quantity: { $gte: 1 } },
      { quantity: { $lte: 5 } },
    ],
  },
  { size: 1, quantity: 1 }
);

// - Query ข้อมูล Order ที่มีการสั่งจำนวนมากกว่า 10 ถาด และไม่ได้จ่ายเงินด้วย Credit Card
db.pizzaOrders.find(
  {
    $and: [{ quantity: { $gt: 10 } }, { credit_card_type: null }],
  },
  { credit_card_type: 1, quantity: 1 }
);
