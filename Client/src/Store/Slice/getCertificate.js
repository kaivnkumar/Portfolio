import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getCertificate = createAsyncThunk("SchoolData", async () => {
  return axio.get(`/api/getcertificate`);
});

const CertificateReducer = createSlice({
  name: "SchoolData",
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
      state.CertificateData = action.payload.data.data;
      state.dataLoading = false;
    },
    [getCertificate.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default CertificateReducer.reducer;
