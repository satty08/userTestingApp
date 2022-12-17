import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {},
        isLoggedIn: false
    },
    reducers:{
        login: (state, actions) => {
            localStorage.setItem('user', actions.payload)
            return{
                ...state,
                user: actions.payload,
                isLoggedIn: true,
                userId:actions.userId
            }
        },
        logout: (state) => {
            localStorage.removeItem('user');
            return{
                ...state,
                user: {},
                isLoggedIn: false,
                userId: ''
            }
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;