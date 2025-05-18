import { useState, useEffect } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log("Fetching data error", error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Clothing</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title}, {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Products;
