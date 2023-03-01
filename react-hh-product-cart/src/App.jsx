import { useState } from "react";

import "./App.css";
import products from "./data/products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    // Array.find เป็นหนึ่งใน built-in array method

    // 1. ตรวจสอบว่ามี product นั้นอยู่ใน cart หรือยัง ?
    const hasProductInCart = cartItems.find((item) => item.id === product.id);

    // 1.1 ถ้ามี product ใน cart แล้ว ก็จะทำการupdate ตัว quantity ของ product นั้น
    if (hasProductInCart) {
      let itemIndex = cartItems.findIndex((item) => item.id === product.id);
      let tempCartItems = [...cartItems];
      tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity + 1;
      setCartItems(tempCartItems);
    } else {
      // 1.2 ถ้าไม่มี ก็จะทำการ set ตัว quantity ให้เป็น 1 (เพราะว่าใน product ไม่มี property quantity)
      let tempProduct = {};
      tempProduct = {
        ...product,
        quantity: 1,
      };
      setCartItems([...cartItems, tempProduct]);
    }
  };

  const deleteCartItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const addProductQuantity = (itemId) => {
    let itemIndex = cartItems.findIndex((item) => item.id === itemId);
    let tempCartItems = [...cartItems];
    tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity + 1;
    setCartItems(tempCartItems);
  };

  const subtractProductQuantity = (itemId) => {
    let itemIndex = cartItems.findIndex((item) => item.id === itemId);
    let tempCartItems = [...cartItems];

    // ถ้า quantity เป็น 1 ให้เอา product นั้นออกจาก cart
    if (tempCartItems[itemIndex].quantity === 1) {
      const newCartItems = tempCartItems.filter((item) => item.id !== itemId);
      setCartItems(newCartItems);
    } else {
      tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity - 1;
      setCartItems(tempCartItems);
    }
  };

  // คำนวณ total price ของ cart
  const cartTotalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="App">
      <section className="product-container">
        <h1 className="product-heading">Products</h1>
        <div className="product-list">
          {products.slice(0, 5).map((product) => {
            return (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={() => addProductToCart(product)}>
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <hr />

      <section className="cart">
        <h1 className="cart-heading">
          Cart (Total Price is {cartTotalPrice} Baht)
        </h1>
        <div className="cart-item-list">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <h1>Item name: {item.name}</h1>
                <h2>Price: {item.price} Baht</h2>
                <h2>Quantity: {item.quantity}</h2>
                <button
                  className="delete-button"
                  onClick={() => deleteCartItem(item.id)}
                >
                  x
                </button>
                <div className="quantity-actions">
                  <button
                    className="add-quantity"
                    onClick={() => addProductQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="subtract-quantity"
                    onClick={() => subtractProductQuantity(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
