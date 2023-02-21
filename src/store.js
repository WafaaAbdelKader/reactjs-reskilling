import { configureStore,createSlice } from '@reduxjs/toolkit'

const booksSlice= createSlice({
    name:'books',
    initialState:{books:[{}], searchedBooks:[]},
    reducers: {
        getBooks(state, action){
            state.books=action.payload;
        },
        updateBook(state, action){
            state.books.map(book => {
                if(book.id === action.payload.book.id) {
                    book.shelf =action.payload.shelf
                    return book;
                } else {
                    return book;
                }
            })
        },
        search(state, action){
            state.searchedBooks=action.payload;
        }

    }
});

const store = configureStore({
    reducer:  booksSlice.reducer
})
export const booksActions = booksSlice.actions;
export default store;