import { createSlice } from "@reduxjs/toolkit";
let initial: Number = 0;

const userSlice = createSlice({
  name: "myIncrementDecrement",
  initialState: initial,
  reducers: {
    increment(state, action) {
      state = action.payload + 1;
    },
    decrement(state, action) {
      state = action.payload - 1;
    },
  },
});

export default userSlice.reducer;
