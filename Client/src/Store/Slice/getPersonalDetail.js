import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getpersonalDetail = createAsyncThunk("personalDetails", async () => {
  return axio.get(`/api/getpersonalDetail`);
});

const infoReducers = createSlice({
  name: "personalDetails",
  initialState: {
    personalData: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getpersonalDetail.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getpersonalDetail.fulfilled]: (state, action) => {
      state.personalData = action.payload.data.data;
      state.dataLoading = false;
    },
    [getpersonalDetail.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default infoReducers.reducer;
