import Button from "../Button/Button";
const ShoppingCart = ({ cartItems, addToCart, removeFromCart }) => {
  let fullPrice = 0;
  for (const item of cartItems) {
    fullPrice += item.price;
  }

  return (
    <div>
      <ul>
        {cartItems.map((item) => {
          return (
            <li>
              {item.title}, {item.price},
              <Button onClick={() => addToCart(item)}>+</Button>
              <Button onClick={() => removeFromCart(item)}>-</Button>
            </li>
          );
        })}
      </ul>
      <h1>Total price:{fullPrice}$</h1>
    </div>
  );
};

export default ShoppingCart;
