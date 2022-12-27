import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getProgLangDetail = createAsyncThunk("SkillData", async () => {
  return axio.get(`/api/getlanguages`);
});

const ProgLangReducers = createSlice({
  name: "SkillData",
  initialState: {
    ProgramingLanguage: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getProgLangDetail.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getProgLangDetail.fulfilled]: (state, action) => {
      state.ProgramingLanguage = action.payload.data.data;
      state.dataLoading = false;
    },
    [getProgLangDetail.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default ProgLangReducers.reducer;
