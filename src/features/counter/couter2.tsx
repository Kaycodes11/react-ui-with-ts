import { createSlice, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {counterSlice} from "./counterSlice";

const incrementBy = createAction<number>('incrementBy')
const decrementBy = createAction<number>('decrementBy')

const counter = createSlice({
    name: 'counter',
    initialState: 0 as number,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        multiply: {
            reducer: (state, action: PayloadAction<number>) => state * action.payload,
            prepare: (value?: number) => ({payload: value || 2}), // fallback if the payload is a falsy value
        },
    },
    // "builder callback API", recommended for TypeScript users
    extraReducers: (builder) => {
        builder.addCase(incrementBy, (state, action) => {
            return state + action.payload
        })
        builder.addCase(decrementBy, (state, action) => {
            return state - action.payload
        })
    },
});

export default counter;
