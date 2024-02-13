import { createSlice } from '@reduxjs/toolkit';
import db from '../../config/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import async service functions
import { fetchShelves, addShelf } from '../services/addShelf';

// get the collection
const shelfDB = collection(db, "shelves");

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
        // state.shelves.status = 'succeeded'
        state.shelfArray.push(action.payload);
      })
    //   .addCase(getShelves.pending, (state) => {
    //     // state.shelves.status = 'loading'
    // })
      .addCase(getShelves.fulfilled, (state, action) => {
        // state.shelves.status = 'succeeded'
        state.shelfArray = action.payload
      })
  }
  
});


export default shelfSlice.reducer;