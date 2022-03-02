import {createSlice} from '@reduxjs/toolkit';

import { setAuthToken } from "@services/api";

const initialState = {
    user: null,
    token: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload: { user, token } }) => {
            setAuthToken(token);
            state.user = user;
            state.token = token;
        },
        destoryCredentials: (state) => {
            setAuthToken('');
            state.user = null;
            state.token = null;
        }
    },
});

export const { setCredentials, destoryCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = state => state.auth.user