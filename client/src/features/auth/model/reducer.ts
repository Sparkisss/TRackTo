import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
}

const autchSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin(state, action: PayloadAction<string>) {
            state.user = action.payload;
            state.isAuthenticated = true
        },
        signout(state) {
            state.user = null;
            state.isAuthenticated = false
        }
    }
})

export const { signout, signin } = autchSlice.actions
export default autchSlice.reducer