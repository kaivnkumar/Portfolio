import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getSuggestions = createAsyncThunk("Suggestions", async () => {
    return axio.get(`/api/getsuggestion`, { withCredentials: true },{sameSite: "none"});
});

const suggestionsReducer = createSlice({
    name: "Suggestions",
    initialState: {
        SuggestionsData: [],
        dataLoading: true,
    },
    reducers: {},
    extraReducers: {
        [getSuggestions.pending]: (state, action) => {
            state.dataLoading = true;
        },
        [getSuggestions.fulfilled]: (state, action) => {
            state.SuggestionsData = action.payload.data.data;
            state.dataLoading = false;
        },
        [getSuggestions.rejected]: (state, action) => {
            state.dataLoading = false;
        },
    },
});

export default suggestionsReducer.reducer;
