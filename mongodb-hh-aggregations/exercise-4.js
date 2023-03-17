// Exercise 4
// Paste the complete MQL here
//ให้ Query หายอดขายทั้งหมดในแต่ละปี โดยที่เรียงจากปีใหม่สุดไปเก่าสุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      total_price_per_year: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);

//		{
//		  _id: 2022,
//		  total_price_per_year: 1036217.17
//		}
//		{
//		  _id: 2021,
//		  total_price_per_year: 4071891.16
//		}
