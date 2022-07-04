import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { bookMarkedSlice } from "./BookMarkedSlice";
import { modalSlice } from "./ModalSlice";
import { jobSlice } from "./JobSlice";

// store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    bookMarked: bookMarkedSlice.reducer,
    modal: modalSlice.reducer,
    jobs: jobSlice.reducer,
  },
});

export default store;
