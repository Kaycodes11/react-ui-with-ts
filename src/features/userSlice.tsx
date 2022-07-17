import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



// using signal
const fetchUserByUserId = createAsyncThunk(
    'users/fetchById',
    async (userId: string, {signal}) => {
        const response = await fetch(`https://reqres.in/api/users/${userId}`, {
            signal: signal,
        })
        return await response.json()
    }
);

// using signal to check status
const readStream = createAsyncThunk(
    'readStream',
    async (stream: ReadableStream, {signal}) => {
        const reader = stream.getReader()

        let done = false
        let result = ''

        while (!done) {
            if (signal.aborted) {
                throw new Error('stop the work, this has been aborted!')
            }
            const read = await reader.read()
            result += read.value
            done = read.done
        }
        return result
    }
);

// listening for abort events
const fetchUserIdWitAxios = createAsyncThunk(
    'users/fetchByIdWitAxios',
    async (userId: string, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel()
        });
        const response = await axios.get(`https://reqres.in/api/users/${userId}`, {
            cancelToken: source.token,
        })
        return response.data;
    }
);

// check if promise rejection was from an error or cancellation : https://redux-toolkit.js.org/api/createAsyncThunk


// thunk function takes two parameters i) action type ii) sync/async callback fn as required iii) options
// from the type given here "users/fetchUserById" it will generate = "users/fetchUserById/pending" - "..../fulfilled" - "..../rejected"

export const fetchUserById = createAsyncThunk('users/fetchUserById',
    async (userId: string | number = 1, thunkApi) => {
        try {
            // first parameter the argument that will be given when dispatching, second thunkApi has dispatch, getState, extra, requestId etc. useful method
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return await response.json();
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.response.data || 'some error has occurred');
        }
    },
);

// 2nd argument is payload creator/action creator, so to cancel thunk action before it gets called, just provide
// a condition, this gets the thunk argument (first parameter), {getState, extra}: thunkApi as parameters so using
// these two parameter can be decided whether to continue or not on payload creation; if payload creation has to
// cancelled then the condition should return a literal false or promise<false>; but if just promise<data> retuned
// then it works as expected before dispatching the payload creator/thunk action

const fetchUserByStatus = createAsyncThunk(
    'users/fetchByIdStatus',
    async (postId: string | number, thunkAPI) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        return await response.json();
    },
    {
        condition: (userId, {getState, extra}) => {
            // @ts-ignore
            const {users} = getState();
            const fetchStatus = users.requests[userId]
            if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
                // Already fetched or in progress, don't need to re-fetch so stopped payload creator cb fn
                // If condition() returns false, the default behavior is that no actions will be dispatched at all. Still want a "rejected" action to be dispatched when the thunk was canceled, pass in {condition, dispatchConditionRejection: true}.
                return false;
            }
        },
        // dispatchConditionRejection: true
    }
)

interface UserState {
    entities?: [];
    loading?: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: UserState & { name: string, age: number } = {
    entities: [],
    loading: "idle",
    name: "",
    age: 11
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    // standard reducer logic, with auto-generated action types per reducer
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload // mutate the state all you want with immer
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.pending, (state, action) => {
            // add user to state's entities array
            // state.entities.push(action.payload);
        })

    }

    // "map object API"
    // extraReducers: {
    //     [counter.actions.increment.type]: (
    //         state,
    //         action /* action will be inferred as "any", as the map notation does not contain type information */
    //     ) => {
    //         state.age += 1
    //     },
    // },
})

// thunk usages

// const onClick = async () => {
//     try {
//         const originalPromiseResult = await dispatch(fetchUserById(userId)).unwrap()
//         // handle result here
//     } catch (rejectedValueOrSerializedError) {
//         // handle error here
//     }
// }

// import { unwrapResult } from '@reduxjs/toolkit'

// // in the component
// const onClick = async () => {
//     try {
//         const resultAction = await dispatch(fetchUserById(userId))
//         const originalPromiseResult = unwrapResult(resultAction)
//         // handle result here
//     } catch (rejectedValueOrSerializedError) {
//         // handle error here
//     }
// }

// to cancel a dispatching/ongoing thunk action from the component

// function MyComponent(props: { userId: string }) {
//     const dispatch = useAppDispatch()
//     React.useEffect(() => {
//         // Dispatching the thunk returns a promise
//         const promise = dispatch(fetchUserById(props.userId))
//         return () => {
//             // `createAsyncThunk` attaches an `abort()` method to the promise
//             promise.abort()
//         }
//     }, [props.userId])
// }

export default usersSlice;
