import "./App.css";
import Products from "./Products/Products";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prevProducts) => [...prevProducts, product]);
  }
  function removeFromCart(product) {
    setCartItems((prevProducts) =>
      prevProducts.filter((item) => {
        return item.id !== product.id;
      })
    );
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
