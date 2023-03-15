import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const validation = createAsyncThunk("password", async (data) => {
    return axio.post(`/api/validate`, data, { withCredentials: true },{sameSite: "none"});
});

export const validationReducer = createSlice({
    name: "validate",
    initialState: {
        validate: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [validation.pending]: (state, action) => {
            state.loading = true;
        },
        [validation.fulfilled]: (state, action) => {
            state.Password = action.payload;
            state.loading = false;
        },
        [validation.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default validationReducer.reducer;
