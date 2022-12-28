import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getdevSkill = createAsyncThunk("devSkills", async () => {
  return axio.get(`/api/getdevskill`);
});

const DevSkillReducers = createSlice({
  name: "devSkills",
  initialState: {
    DevSkills: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getdevSkill.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [getdevSkill.fulfilled]: (state, action) => {
      state.DevSkills = action.payload.data.data;
      state.dataLoading = false;
    },
    [getdevSkill.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default DevSkillReducers.reducer;
