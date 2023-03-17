// Exercise 7
// Paste the complete MQL here
//ให้ Query หาเดือนที่มียอดขายรวมต่ำสุดในปี 2021

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_price_by_month: { $sum: "$total_price" },
    },
  },
  { $match: { "_id.year": 2021 } },
  { $sort: { total_price_by_month: 1 } },
  { $limit: 1 },
]);

// {
//   _id: {
//     year: 2021,
//     month: 2
//   },
//   total_price_by_month: 240381.84
// }
