import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productStore";
import { cartSlice } from "./cartStore";
import { enableMapSet } from "immer";

// enable Map and Set support from Immer
enableMapSet();

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
