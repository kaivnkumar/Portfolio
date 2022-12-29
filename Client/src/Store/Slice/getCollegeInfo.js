import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getCollegeInfo = createAsyncThunk("CollegeData", async () => {
  return axio.get(`/api/collegeinfo`);
});

const CollegeInfoReducer = createSlice({
  name: "CollegeData",
  initialState: {
    Score: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getCollegeInfo.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getCollegeInfo.fulfilled]: (state, action) => {
      state.CollegeData = action.payload.data.data;
      state.dataLoading = false;
    },
    [getCollegeInfo.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default CollegeInfoReducer.reducer;
