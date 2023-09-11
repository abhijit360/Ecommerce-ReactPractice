import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state)=>state.cart);
  const CartItems =[] 
  for(const [key,value] of Object.entries(cart.products)){
    CartItems.push(
      <CartItem 
        productData={products[key]}
        quantity={value} 
      />
    )
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <button
        onClick={() => {
          console.log(products["Product 1"]);
          console.log(cart.products)
          console.log(CartItems)
        }}
      >
        Test button
      </button>
      <ul>
        {CartItems}
      </ul>
    </Card>
  );
};

export default Cart;
