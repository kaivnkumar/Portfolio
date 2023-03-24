import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getCollegeInfo = createAsyncThunk("CollegeData", async () => {
  return axio.get(`/api/collegeinfo`);
});

const CollegeInfoReducer = createSlice({
  name: "CollegeData",
  initialState: {
    Score: [],
    datasLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getCollegeInfo.pending]: (state, action) => {
      state.datasLoading = true;
    },
    [getCollegeInfo.fulfilled]: (state, action) => {
      state.CollegeData = action.payload.data.data;
      state.datasLoading = false;
    },
    [getCollegeInfo.rejected]: (state, action) => {
      state.datasLoading = false;
    },
  },
});

export default CollegeInfoReducer.reducer;
