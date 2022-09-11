import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from "@/store/auth/auth.interface";
import { register } from "./auth.actions";

const initialState: IAuthInitialState = {
    user: null,
    accessToken: "",
    isLoading: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                state.accessToken = payload.accessToken;
            })
            .addCase(register.rejected, state => {
                state.isLoading = false;
                state.user = null;
                state.accessToken = "";
            });
    }
});