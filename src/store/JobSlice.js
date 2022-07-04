import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobsResults: [],
    loading: true,
    currentPage: 1,
    error: null,
  },
  reducers: {
    getJobs: (state, action) => {
      state.jobsResults = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { getJobs, setLoading, setCurrentPage } = jobSlice.actions;
export default jobSlice.reducer;
