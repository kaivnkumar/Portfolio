import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getProjects = createAsyncThunk("project", async () => {
    return axio.get(`/api/getprojects`);
});

const ProjectsReducers = createSlice({
    name: "project",
    initialState: {
        Projects: [],
        dataLoading: true,
    },
    reducers: {},
    extraReducers: {
        [getProjects.pending]: (state, action) => {
            state.dataLoading = true;
        },
        [getProjects.fulfilled]: (state, action) => {
            state.Projects = action.payload.data.data;
            state.dataLoading = false;
        },
        [getProjects.rejected]: (state, action) => {
            state.dataLoading = false;
        },
    },
});

export default ProjectsReducers.reducer;
