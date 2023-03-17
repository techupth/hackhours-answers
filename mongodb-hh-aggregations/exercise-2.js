// Exercise 2
// Paste the complete MQL here
//ให้เขียน Query หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size โดยที่ให้เรียงตามยอดขายที่มากที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_price: -1 } },
]);

// {
//  _id: 'large',
//  total_amount: 1615081.93,
//  total_quantity: 3448
// }
// {
//  _id: 'small',
//  total_amount: 1750316.41,
//  total_quantity: 3468
// }
// {
//  _id: 'medium',
//  total_amount: 1742709.99,
//  total_quantity: 3543
// }
