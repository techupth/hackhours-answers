//Exercise 5
let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

// Start coding here

// 1) หา Order ที่มีมูลค่ามากที่สุด เมื่อหาได้แล้วให้ Log ผลลัพธ์ออกมาทางหน้าจอ
let currentPurchasedAmount;
let maxPurchasedAmount;
let maxPurchasedId;

for (let i = 0; i < orders.length; i++) {
  currentPurchasedAmount = orders[i].productPrice * orders[i].productQuantity;
  if (i === 0) {
    maxPurchasedAmount = currentPurchasedAmount;
    maxPurchasedId = orders[i].id;
  } else if (maxPurchasedAmount < currentPurchasedAmount) {
    maxPurchasedAmount = currentPurchasedAmount;
    maxPurchasedId = orders[i].id;
  }
}

console.log(`Order id: ${maxPurchasedId}, Total price: ${maxPurchasedAmount}`);

// 2) ให้ใช้ Loop ในการหาว่า "Birdie Shepland" จ่ายเงินซื้อสินค้าไปทั้งหมดเท่าไหร่ เมื่อหาได้แล้วให้ Log ผลลัพธ์ออกมาทางหน้าจอ
let birdiePurchasedAmount;

for (let i = 0; i < orders.length; i++) {
  if (orders[i].customerName === "Birdie Shepland") {
    birdiePurchasedAmount = currentPurchasedAmount;
  }
}

console.log(`Total price is ${birdiePurchasedAmount}`);

// 3) ให้ใช้ Loop ในการหา Order ที่จ่ายเงินด้วยเครดิตการ์ดของ "jcb" เมื่อเจอแล้วให้นำ Object ของ Order นั้นไปบรรจุลงใน Array ที่มีชื่อว่า jcbOrders
const jcbOrders = [];

for (let i = 0; i < orders.length; i++) {
  if (orders[i].creditCardType === "jcb") {
    jcbOrders.push(orders[i]);
  }
}

console.log(jcbOrders);

// 4) ให้ใช้ Loop ในการหายอดรวมของการซื้อสินค้าในทุกๆ Order ว่าทั้งหมดเป็นเท่าไหร่
let sumPurchasedAmount = 0;

for (let i = 0; i < orders.length; i++) {
  sumPurchasedAmount += currentPurchasedAmount;
}

console.log(`Total: ${sumPurchasedAmount}`);
