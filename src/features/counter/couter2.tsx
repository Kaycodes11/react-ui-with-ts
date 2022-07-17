import {createSlice, createAction, Action} from '@reduxjs/toolkit'
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

// function isNumberValueAction(action: AnyAction): action is PayloadAction<{ value: number }> {
//     return typeof action.payload.value === 'number'
// }
//
// createReducer({ value: 0 }, builder =>
//     builder.addMatcher(isNumberValueAction, (state, action) => {
//         state.value += action.payload.value
//     })
// })


// const slice = createSlice({
//     name: 'test',
//     initialState: 0,
//     reducers: {
//         increment: (state, action: PayloadAction<number>) => state + action.payload,
//     },
// })
// // now available:
// slice.actions.increment(2)
// // also available:
// slice.caseReducers.increment(0, { type: 'increment', payload: 5 })

// ## Generated action types for slices

// function myCustomMiddleware(action: Action) {
//     if (slice.actions.increment.match(action)) {
//         // `action` is narrowed down to the type `PayloadAction<number>` here.
//     }
// }



// ## separate case reducer to use within multiple slice
// type State = number
// const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
//     state + action.payload
//
// createSlice({
//     name: 'test',
//     initialState: 0,
//     reducers: {
//         increment,
//     },
// })
