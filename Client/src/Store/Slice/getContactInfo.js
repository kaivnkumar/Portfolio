import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getContactInfo = createAsyncThunk("contactDetail", async () => {
  return axio.get(`/api/getcontactinfo`);
});

const contactReducers = createSlice({
  name: "contactDetail",
  initialState: {
    contactDetails: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getContactInfo.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getContactInfo.fulfilled]: (state, action) => {
      state.contactDetails = action.payload.data.data;
      state.dataLoading = false;
    },
    [getContactInfo.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default contactReducers.reducer;
