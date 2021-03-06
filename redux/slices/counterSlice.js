import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value -= 1; // state.value = state.value -1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // state.value = state.value + action.payload;
    },
  },
});

// Actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;
