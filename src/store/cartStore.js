import { createSlice } from "@reduxjs/toolkit";


const cartState = { products: {}, cartVisibility: false };

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartState,
  reducers: {
    addProduct(state, action) {
      const Productname = action.payload.Productname;
      console.log("ProductName", Productname);
      if (!(Productname in state.products)) {
        state.products[Productname] = 1
      } else {
        state.products[Productname] += 1
      }
    },
    removeProduct(state, action) {
      const {Productname} = action.payload.Productname;
      if (Productname in state.products) {
        state.products[Productname] -= 1
      } else {
        console.log("Error! Can't derement something that does not exist")
      }
    },
    displayCart(state) {
      state.cartVisibility = !state.cartVisibility;
    },
  },
});

export const cartActions = cartSlice.actions;
