// Exercise #2
// - ใช้ `findOne` ในการหาข้อมูล Order ของลูกค้าชื่อ `Zoe`
// - จากนั้นให้ทำการ Transform ข้อมูลให้เหลือแค่ Property `total_price` และ `customer_name`
db.pizzaOrders.findOne(
  {
    customer_name: "Zoe",
  },
  { total_price: 1, customer_name: 1 }
);
