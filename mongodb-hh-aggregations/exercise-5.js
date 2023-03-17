// Exercise 5
// Paste the complete MQL here
//ให้ Query หายอดขายทั้งหมดในแต่ละเดือนและปี โดยที่เรียงจากปีและเดือนใหม่สุดไปเก่าสุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_price_by_month: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);

//or

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_price_by_month: { $sum: "$total_price" },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } },
]);
