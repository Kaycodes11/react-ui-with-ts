import {createSlice} from "@reduxjs/toolkit";
import counter from "./counter/couter2";


const user = createSlice({
    name: 'user',
    initialState: { name: '', age: 20 },
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload // mutate the state all you want with immer
        },
    },
    // "map object API"
    extraReducers: {
        [counter.actions.increment.type]: (
            state,
            action /* action will be inferred as "any", as the map notation does not contain type information */
        ) => {
            state.age += 1
        },
    },
})

export default user;
