import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getCertificate = createAsyncThunk("Certificate", async (data) => {
  return axio.get(`/api/getcertificate?GradeId=${data.ID}`);
});

const certificateReducers = createSlice({
  name: "Certificate",
  initialState: {
    Score: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getCertificate.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getCertificate.fulfilled]: (state, action) => {
      state.Certificate = action.payload.data.data;
      state.dataLoading = false;
    },
    [getCertificate.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default certificateReducers.reducer;
