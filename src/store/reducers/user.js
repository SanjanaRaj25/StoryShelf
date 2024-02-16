import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "", 
        uid: ""
    },
    reducers: {

        login: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
        },

        logout: (state) => {
            state = null;
        }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;