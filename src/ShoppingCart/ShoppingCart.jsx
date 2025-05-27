import Button from "../Button/Button";
import { Link } from "react-router-dom";
const ShoppingCart = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  let fullPrice = 0;
  for (const item of cartItems) {
    fullPrice += item.price * item.quantity;
  }

  return (
    <div>
      <ul>
        {cartItems.map((item) => {
          return (
            <li>
              {item.title}, {item.price}, qty:{item.quantity}
              <Button onClick={() => addToCart(item)}>+</Button>
              <Button onClick={() => removeFromCart(item)}>-</Button>
            </li>
          );
        })}
      </ul>
      <h1>Total price:{fullPrice}$</h1>
      <Button onClick={clearCart}>Clear Cart</Button>
      <Link to={"/checkout"}>
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
