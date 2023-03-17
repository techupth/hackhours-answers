// Exercise #1
// ใช้ findOne ในการหาข้อมูล Order ของลูกค้าชื่อ Cherlyn
db.pizzaOrders.findOne({ customer_name: "Cherlyn" });

//- ใช้ `find` ในการหาข้อมูล Order ที่จ่ายเงินด้วย Credit Card ของ `mastercard`
db.pizzaOrders.find({ credit_card_type: "mastercard" });

// ใช้ `find` ในการหาข้อมูล Order ที่สั่ง Pizza ขนาด `medium`
// และจากนั้นให้ Limit จำนวนข้อมูลที่หาเจอเหลือแค่ 5 Documents
db.pizzaOrders.find({ size: "medium" }).limit(5);
