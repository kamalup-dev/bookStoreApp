import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const getData = useSelector((state) => state.cart.items);
  const totalCartItem = useSelector((state) => state.cart.totalQuantity)
  let totalCartItemPrice = 0;
  getData.forEach((el,i) => {
    totalCartItemPrice += el.totalPrice
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {getData.map((product) => (
          <CartItem
            key = {product.id}
            item={{
              id: product.id,
              title: product.name,
              quantity: product.quantity,
              price: product.price,
              total: product.totalPrice,
            }}
          />
        ))}
      </ul>
      <div className={classes.totalSection}><span>Total Items : {totalCartItem}</span> <span>Total Price : {totalCartItemPrice}</span></div>
    </Card>
  );
};

export default Cart;
