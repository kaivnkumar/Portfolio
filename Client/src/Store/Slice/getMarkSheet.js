import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getMarksheet = createAsyncThunk("Marksheet", async (data) => {
  return axio.get(`/api/getmarksheet?MarksheetId=${data.ID}`);
});

const MarksheetReducers = createSlice({
  name: "Marksheet",
  initialState: {
    Score: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getMarksheet.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getMarksheet.fulfilled]: (state, action) => {
      state.Marksheet = action.payload.data.data;
      state.dataLoading = false;
    },
    [getMarksheet.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default MarksheetReducers.reducer;
