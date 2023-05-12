import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cocktailSlice";

export const store = configureStore({
  reducer: {
    app: cocktailSlice,
  },
});

export default store;
