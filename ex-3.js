//Exercise 3
function getMostExpensiveProduct(products) {
  let mostExpensiveProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }

  return mostExpensiveProduct;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

console.log(getMostExpensiveProduct(products));
// Output: { name: "Laptop", price: 1000 }
