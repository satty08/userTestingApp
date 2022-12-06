import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{},
    reducers:{
        login: (state, actions) => {
            return{
                ...state,
                user: actions.payload
            }
        },
        logout: (state) => {
            return{
                ...state,
                user: {}
            }
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;