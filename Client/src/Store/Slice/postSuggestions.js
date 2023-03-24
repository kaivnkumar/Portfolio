import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postSuggestions = createAsyncThunk("suggestions", async (data) => {
    return axio.post(`/api/postsuggestion`, data);
});

export const suggestionReducer = createSlice({
    name: "suggestions",
    initialState: {
        Suggestions: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [postSuggestions.pending]: (state, action) => {
            state.loading = true;
        },
        [postSuggestions.fulfilled]: (state, action) => {
            state.Suggestions = action.payload;
            state.loading = false;
        },
        [postSuggestions.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default suggestionReducer.reducer;
