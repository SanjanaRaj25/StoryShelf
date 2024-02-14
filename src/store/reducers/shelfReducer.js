import { createSlice } from '@reduxjs/toolkit';
import db from '../../config/firebaseConfig';
import { collection } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import logic for async service functions
import { fetchShelves, addShelf, deleteShelf, addBook } from '../services/addShelf';


export const getShelves = createAsyncThunk(
  'shelves/getAll', 
  async () => {
    const shelves = await fetchShelves();
    return shelves;
  }
)

export const addShelves = createAsyncThunk(
  'shelves/add', 
  async (newShelf) => {
    const shelves = await addShelf(newShelf);
    return shelves;
  }
)

export const delShelf = createAsyncThunk(
  'shelves/delete', 
  async (id) => {
    const deletedShelf = await deleteShelf(id);
    return deletedShelf;
  }
)

export const addBooks = createAsyncThunk(
  'shelves/addbook', 
  async (book) => {
    const addedBook = await addBook(book);
    return addedBook;
  }
)


export const shelfSlice = createSlice({
  name: "shelves",
  initialState: {
    shelfArray: [],
    status: 'idle'
  },
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addShelves.fulfilled, (state,action) => {

        builder.addCase(getShelves.fulfilled, (state, action) => {
          state.shelfArray = action.payload.map(shelf => ({
            ...shelf,
            books: shelf.books.map(book => ({...book})) 
          }));
        });

      })


      .addCase(getShelves.fulfilled, (state, action) => {
        // state.shelves.status = 'succeeded'
        state.shelfArray = action.payload
      })
      .addCase(delShelf.fulfilled, (state, action)=>{
        state.shelfArray = state.shelfArray.filter((shelf)=>shelf.id !== action.payload);
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        console.log(action.payload);
        // const shelf = state.shelfArray.find(s => s.id === action.payload.i);
        // shelf.bookArray.push(action.payload.book);
      })
  }
});


export default shelfSlice.reducer;