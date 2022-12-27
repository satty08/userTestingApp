import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {},
        isLoggedIn: false
    },
    reducers:{
        
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;