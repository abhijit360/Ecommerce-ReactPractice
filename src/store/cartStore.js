import { createSlice } from "@reduxjs/toolkit";

const cartState = { products: newMap(), cartVisibility: false };

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartState,
  reducers: {
    addProduct(state, action) {
      if (!products.has(action.name)) {
        state.products.set(action.name, 1);
      } else {
        state.products.set(action.name, state.products.get(action.name) + 1);
      }
    },
    removeProduct(state, action) {
      if (!products.has(action.name)) {
        state.products.set(action.name, state.products.get(action.name) -1);
      } else {
        console.log("can't decrement past zero")
      }
    },
    displayCart(state) {
      state.cartVisibility = !state.cartVisibility;
    },
  },
});

export const cartActions = cartSlice.actions;
