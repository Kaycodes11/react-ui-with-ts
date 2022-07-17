import {combineReducers, configureStore} from '@reduxjs/toolkit'
import type {PreloadedState} from '@reduxjs/toolkit'
import {pokemonApi} from "./services/pokemon";
import {counterSlice } from "./features/counter/counterSlice";
import usersSlice from "./features/userSlice";
import booksSlice from "./features/book";
// import counter from "./features/counter/couter2";

// combineReducers takes/lists all the reducers as key-value pair
const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterSlice.reducer,
    users: usersSlice.reducer,
    books: booksSlice.reducer

});

console.log(`MODE`, !process.env.REACT_APP_IS_PROD);

// basically prvodie some data before (from server/local) to the required reducer keeping the same data shape

// const preloadedState = {
//     users: [
//         {
//             name: "james",
//             age: 11
//         },
//         {
//             name: "jones",
//             age: 14
//         },
//     ],
//     visibilityFilter: 'SHOW_COMPLETED',
// }
//
// const store = configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     preloadedState,
// })

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        // devTools: !process.env.REACT_APP_IS_PROD,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features from `rtk-query`
            getDefaultMiddleware().concat(pokemonApi.middleware),
        preloadedState,
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];



// AppStore.dispatch(user.actions.setUserName(`john`))
// AppStore.dispatch(counter.actions.multiply(2))

// compose function build from left to right
