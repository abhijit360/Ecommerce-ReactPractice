import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartStore";

const CartItem = (props) => {
  console.log(props)
  const { title, description, price } = props.productData;
  const quantity = props.quantity;
  const total = price * quantity;
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeProduct({ Productname: title }));
            }}
          >
            -
          </button>
          <button onClick={cartActions.addProduct({ Productname: title })}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
