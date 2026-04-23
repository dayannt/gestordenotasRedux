import { configureStore } from "@reduxjs/toolkit";
import NotasReducer from "./Slice/sliceNotas";

export const storeRedux = configureStore({
  reducer: {
    reducerNotas: NotasReducer,
  },
});