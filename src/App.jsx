import "./App.css";
import Products from "./Products/Products";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }
  function removeFromCart(product) {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0);
    });
  }
  console.log(cartItems);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
