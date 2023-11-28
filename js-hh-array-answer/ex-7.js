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
];
// Start coding here

// เฉลยข้อ 1)
let isArray = Array.isArray(orders);

// เฉลยข้อ 2)
let creditCardTypeOfBlindermann = orders[2].creditCardType;

// เฉลยข้อ 3)
orders[2].creditCardType = "visa";

// เฉลยข้อ 4)
let productQuantityOfJoannet = orders[3].productQuantity;

// เฉลยข้อ 5)
let totalPurchaseOfDary = orders[1].productPrice * orders[1].productQuantity;

// เฉลยข้อ 6)
orders.shift();

// เฉลยข้อ 7)
console.log(orders);
