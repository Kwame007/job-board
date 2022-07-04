import { createSlice } from "@reduxjs/toolkit";

// booked marked slice
export const bookMarkedSlice = createSlice({
  name: "bookMarked",
  initialState: {
    bookMarked: [],
    isBookMarked: false,
  },
  reducers: {
    addBookMarked: (state, action) => {
      // check if already bookmarked
      // if (state.bookMarked.includes(action.payload)) {
      //   state.bookMarked = state.bookMarked.filter(
      //     (book) => book !== action.payload
      //   );
      //   state.isBookMarked = false;
      // } else {
      //   state.bookMarked.push(action.payload);
      //   state.isBookMarked = true;
      // }
      state.bookMarked.push(action.payload);
      state.isBookMarked = true;
    },
  },
});

export const { addBookMarked } = bookMarkedSlice.actions;

export default bookMarkedSlice.reducer;
