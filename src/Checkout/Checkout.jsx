import React from "react";
import Button from "../Button/Button";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Checkout = ({ cartItems, clearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [orderPlaced, navigate]);

  let fullPrice = 0;
  for (const item of cartItems) {
    fullPrice += item.price * item.quantity;
  }
  return (
    <div>
      {orderPlaced && <h2>Order placed! Thank you!</h2>}
      <ul>
        {cartItems.map((item) => {
          return (
            <li>
              {item.title}, {item.price}, qty:{item.quantity}
            </li>
          );
        })}
      </ul>
      <p>{fullPrice}</p>

      <Button
        onClick={() => {
          clearCart();
          setOrderPlaced(true);
        }}
      >
        Place Order
      </Button>
    </div>
  );
};

export default Checkout;
