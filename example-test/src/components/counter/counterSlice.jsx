import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increase(state, action) {
            state.counter++;
        },
        decrease: (state, action) => {
            state.counter--;
        },
        reset: (state, action) => {
            state.counter = 0;
        }

    }
})