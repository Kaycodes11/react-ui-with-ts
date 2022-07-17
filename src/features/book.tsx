import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import type { RootState } from '../store'

type Book = { bookId: string; title: string };

// this method is good for quick crud as it has many useful methods like addOne, addMany etc.

const booksAdapter = createEntityAdapter<Book>({
    // assume ids are sorted in a field other than `book.id`
    selectId: (book) => book.bookId,
    // keep the all ids sorted based on book titles
    sortComparer: (a, b) => a.title.localeCompare(b.title)
});


const booksSlice = createSlice({
    name: `books`,
    initialState: booksAdapter.getInitialState({loading: 'idle'}),
    reducers: {
        booksAdded: booksAdapter.addOne,
        booksLoading(state, action) {
            if(state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        booksReceived(state, action) {
            if (state.loading === 'pending') {
                booksAdapter.setAll(state, action.payload.books);
                state.loading = `idle`;
            }
        },
        bookUpdated: booksAdapter.updateOne,
    },
});

// memoize selector

// const booksSelectors = booksAdapter.getSelectors<RootState>(state => state.books);
// const allBooks = booksSelectors.selectAll(store.getState())

// dispatch(bookAdded({ id: 'a', title: 'first' })
// console.log(store.getState().books);


// store.dispatch(bookUpdated({ id: 'a', changes: { title: 'First (altered)' } }))
// store.dispatch(booksLoading())
// console.log(store.getState().books)
// {ids: ["a"], entities: {a: {id: "a", title: "First (altered)"}}, loading: 'pending' }


// store.dispatch(
//     booksReceived([
//         { id: 'b', title: 'Book 3' },
//         { id: 'c', title: 'Book 2' },
//     ])
// )
//
// console.log(booksSelectors.selectIds(store.getState()))
// // "a" was removed due to the `setAll()` call
// // Since they're sorted by title, "Book 2" comes before "Book 3"
// // ["c", "b"]
//
// console.log(booksSelectors.selectAll(store.getState()))
// // All book entries in sorted order
// // [{id: "c", title: "Book 2"}, {id: "b", title: "Book 3"}]

// {ids: ["a"], entities: {a: {id: "a", title: "first"} }

export const { booksAdded, booksReceived, booksLoading, bookUpdated } = booksSlice.actions;
export default booksSlice;
