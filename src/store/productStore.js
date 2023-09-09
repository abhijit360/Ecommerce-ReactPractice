import { createSlice } from "@reduxjs/toolkit";

const productState = {
  Product1: {
    title: "Product 1",
    price: 1,
    description: "This is a first product - amazing!",
  },
  Product2: {
    title: "Product 2",
    price: 2,
    description: "This is a second product - amazing!",
  },
  Product3: {
    title: "Product 3",
    price: 3,
    description: "This is a thrid product - amazing!",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {}, // can this be empty for now. We just want to use this store to get data from it?
});



