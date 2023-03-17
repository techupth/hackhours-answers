// Exercise 1
// ให้เขียน Query หายอดเงินทั้งหมดที่จ่ายด้วยเงินสด และที่จ่ายด้วยบัตรเครดิตในแต่ละชนิด
// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$credit_card_type",
      total_by_payment: {
        $sum: "$total_price",
      },
    },
  },
]);

// {
//  _id: 'mastercard',
//  total_paid: 1432896.81
// }
// {
//  _id: null,
//  total_paid: 3675211.52
// }
