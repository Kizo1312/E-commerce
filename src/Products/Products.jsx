import { useState, useEffect } from "react";
import Button from "../Button/Button";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

      {!selectedCategory && (
        <ul>
          {categories.map((category) => (
            <li key={category.slug || category}>
              <Button
                onClick={() => handleCategoryClick(category.slug || category)}
              >
                {category.name || category}
              </Button>
            </li>
          ))}
        </ul>
      )}

      {selectedCategory && (
        <div>
          <h3>Products in: {selectedCategory}</h3>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                {product.title}, ${product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Products;
