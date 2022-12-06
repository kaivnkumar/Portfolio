import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getImage = createAsyncThunk("Picture", async () => {
  return axio.get(`/api/getimage`);
});

const pictureReducers = createSlice({
  name: "Picture",
  initialState: {
    Image: [],
    ImageLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getImage.pending]: (state, action) => {
      state.ImageLoading = true;
    },
    [getImage.fulfilled]: (state, action) => {
      state.Image = action.payload.data.data;
      state.ImageLoading = false;
    },
    [getImage.rejected]: (state, action) => {
      state.ImageLoading = false;
    },
  },
});

export default pictureReducers.reducer;
