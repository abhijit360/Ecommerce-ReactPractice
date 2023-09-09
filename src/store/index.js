import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productStore";
import { cartSlice } from "./cartStore";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
