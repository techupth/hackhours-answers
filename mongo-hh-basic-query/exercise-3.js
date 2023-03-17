// Exercise #3
// - Sort ข้อมูลด้วย Property `total_price`  จากมากไปน้อย
db.pizzaOrders.find({}).sort({ total_price: -1 });

// - Sort ข้อมูลด้วย Property `created_at` จากวันเก่าสุดไปใหม่สุด
db.pizzaOrders.find({}).sort({ created_at: 1 });
