import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Products.css";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  function handleBack() {
    setSelectedCategory(null);
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Fetching products error", error);
      }
    }

    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Fetching categories error", error);
      }
    }

    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div>
      <h2>Search by category</h2>

      <Button onClick={handleBack}>Back</Button>
      <ul id="category">
        {categories.map((category) => {
          const slug = category.slug || category;

          const hasProducts = products.some(
            (product) => product.category === slug
          );

          if (!hasProducts) return null;

          return (
            <li key={slug}>
              <Button onClick={() => handleCategoryClick(slug)}>
                {category.name || category}
              </Button>
            </li>
          );
        })}
      </ul>

      {selectedCategory && (
        <div>
          <h3>Products in: {selectedCategory}</h3>
          <ul id="products">
            {filteredProducts.map((product) => (
              <li id="product" key={product.id}>
                <strong>{product.title}</strong> ${product.price}{" "}
                <img src={product.images[0]} alt="" />
                <Link to={`/products/${product.id}`}>
                  <Button>View detail</Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Products;
