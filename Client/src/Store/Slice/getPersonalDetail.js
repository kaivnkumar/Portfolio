import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getPersonalDetail = createAsyncThunk("personalDetails", async () => {
  return axio.get(`/api/getpersonaldetail`);
});

const infoReducers = createSlice({
  name: "personalDetails",
  initialState: {
    personalData: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getPersonalDetail.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getPersonalDetail.fulfilled]: (state, action) => {
      state.personalData = action.payload.data.data;
      state.dataLoading = false;
    },
    [getPersonalDetail.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default infoReducers.reducer;
