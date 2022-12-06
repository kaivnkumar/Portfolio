import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getSchoolInfo = createAsyncThunk("SchoolData", async () => {
  return axio.get(`/api/getschoolinfo`);
});

const SchoolInfoReducer = createSlice({
  name: "SchoolData",
  initialState: {
    Score: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getSchoolInfo.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getSchoolInfo.fulfilled]: (state, action) => {
      state.SchoolData = action.payload.data.data;
      state.dataLoading = false;
    },
    [getSchoolInfo.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default SchoolInfoReducer.reducer;
