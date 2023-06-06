import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    reduction: (state) => {
      return { ...state, count: state.count - 1 };
    },
    addNumber: (state, action) => {
      return { ...state, count: action.payload };
    },
  },
});

export default counter.reducer;

export const { increment, reduction, addNumber, } = counter.actions;
