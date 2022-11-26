import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'users',
    // initialState: localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [],
    initialState: [
        {
            id: 1,
            name: 'abc',
            address: 'dn',
            email: 'ahihi@gmail.com'
        },
        {
            id: 2,
            name: 'abcd',
            address: 'dn',
            email: 'ahihasi@gmail.com'
        },
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {

        },
        deleteUser: (state, action) => {
        }
    }
})