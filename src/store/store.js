import { configureStore } from "@reduxjs/toolkit";
import count from "./reducers/count";

export const store = configureStore({
  reducer: {
    counter: count,
  },
});
