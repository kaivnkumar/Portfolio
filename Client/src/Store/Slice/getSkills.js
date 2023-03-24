import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getSkill = createAsyncThunk("skill", async () => {
  return axio.get(`/api/getskill`);
});

const SkillReducers = createSlice({
  name: "skill",
  initialState: {
    SkillsInfo: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getSkill.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getSkill.fulfilled]: (state, action) => {
      state.SkillsInfo = action.payload.data.data;
      state.dataLoading = false;
    },
    [getSkill.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default SkillReducers.reducer;
