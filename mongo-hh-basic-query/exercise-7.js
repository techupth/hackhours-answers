// Exercise #7
// Delete ข้อมูล Order ของ Jack ออกทั้งหมด
db.pizzaOrders.deleteMany({
  customer_name: "Jack",
});
