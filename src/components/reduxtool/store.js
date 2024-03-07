import {configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";


const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default Store;
