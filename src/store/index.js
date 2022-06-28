import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";

// store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
