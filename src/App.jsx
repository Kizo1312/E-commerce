import "./App.css";
import Products from "./Products/Products";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prevProducts) => [...prevProducts, product]);
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
      </Routes>
    </div>
  );
}

export default App;
