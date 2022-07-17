import {createAction, createSlice, nanoid} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Item {
    id: string
    text: string
}

// Key made from createAction method directly usable as key to extraReducers using computed property syntax
const updateTodo = createAction('updateTodo');

const todosSlice = createSlice({
    name: 'todos',
    initialState: [] as Item[],
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Item>) => {
                state.push(action.payload)
            },
            // to customize the payload as needed before it goes to update the state from reducer method
            prepare: (text: string) => {
                const id = nanoid()
                return { payload: { id, text } }
            },
        },
    },
    // extraReducers helps createSlice to respond to other action type other that auto-generated from reducer
    // If two fields from reducers and extraReducers happen to end up with the same action type string, the function from reducers will be used to handle that action type.

    extraReducers: {
        [String(updateTodo)]: () => {},
        'some/other/action': (state, action) => {}
    }
})
