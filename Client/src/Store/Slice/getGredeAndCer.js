import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getgradeandcer = createAsyncThunk("Grade", async () => {
  return axio.get(`/api/getgradeandcer`);
});

const gradeReducers = createSlice({
  name: "Grade",
  initialState: {
    Score: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getgradeandcer.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getgradeandcer.fulfilled]: (state, action) => {
      state.Grade = action.payload.data.data;
      state.dataLoading = false;
    },
    [getgradeandcer.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default gradeReducers.reducer;
