import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface CounterState {
  products: Array<string>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CounterState = {
  products: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity+=actions.payload.quantity
    },
    
    removeFromCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity-=actions.payload.quantity

    },
    clearCart: (state, action: PayloadAction<number>) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions;

export default counterSlice.reducer;
