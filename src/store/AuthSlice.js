import { createSlice } from "@reduxjs/toolkit";

// const auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
