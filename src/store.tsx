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
    user: usersSlice.reducer,
    books: booksSlice.reducer

});


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware().concat(pokemonApi.middleware),
        preloadedState,
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];



// AppStore.dispatch(user.actions.setUserName(`john`))
// AppStore.dispatch(counter.actions.multiply(2))

/*

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
*/
