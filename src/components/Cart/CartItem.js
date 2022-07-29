import classes from './CartItem.module.css';
import { cartSliceActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(cartSliceActions.onAddItem({id, name: title, price})) 
   }
   const removeItemFromCart = () => {
    dispatch(cartSliceActions.onRemoveItem(id)) 
   }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCart}>-</button>
          <button onClick={addItemToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
