import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartStore";

const CartButton = (props) => {
  const totalItems = useSelector((state) => {
    let total = 0;
    for(const [key, value] of Object.entries(state.cart.products)){
      total += value;
    };

    return total;
  });
  const dispatch = useDispatch();
  return (
    <button className={classes.button}>
      <span
        onClick={() => {
          dispatch(cartActions.displayCart());
        }}
      >
        My Cart
      </span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
