import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  count: 100
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count++;
    },

    decrement(state, action) {
      state.count--;
    },
    incrementByN(state, action) {
      state.count += action.payload.data;
    },
  },
});

export const counterActions = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
