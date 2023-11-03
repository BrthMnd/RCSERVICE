import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticate: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { 
        Log: (state, action) => {
            state.isAuthenticate = action.payload
        }
    }
});

export const { Log } = userSlice.actions;
export default userSlice.reducer;