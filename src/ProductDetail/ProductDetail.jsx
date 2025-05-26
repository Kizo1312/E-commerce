import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.log("Error getting details data", error);
      }
    }
    fetchDetails();
  }, [id]);

  if (!details.title) return <p>Loading...</p>;

  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.price}</p>
      <img src={details.images[0]} alt={details.title} />
      <Button onClick={() => addToCart(details)}>Add to cart</Button>
      <Link to={"/cart"}>
        <Button>Go to cart</Button>
      </Link>
    </div>
  );
};

export default ProductDetail;
