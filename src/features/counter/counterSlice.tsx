import {createSlice, current, original} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "../../store";

// typing for the initial state
interface CounterState {
    value: number;
}

// initial state
const initialState: CounterState = {value: 0};
// const initialState = {value: 0} as CounterState;


// createSlice uses immer this state can mutated directly like it did here without hassle
export const counterSlice = createSlice({
    name: `counter`,
    // createSlice here will infer the type from initialState
    initialState,
    reducers: {
        incrementBy10: (state, action: PayloadAction<number>) => {
            console.log(`og`, original(state));
            console.log(`before`, current(state));
            state.value += action.payload || 10;
            console.log(`after`, current(state));
        },
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

export const {increment, incrementByAmount, decrement} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;

