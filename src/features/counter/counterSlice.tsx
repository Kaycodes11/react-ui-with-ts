import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "../../store";

// typing for the initial state
interface CounterState {
    value: number;
}

// initial state
const initialState = {value: 0} as CounterState;

export const counterSlice = createSlice({
    name: `counter`,
    // createSlice here will infer the type from initialState
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { increment, incrementByAmount,decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;

