import { createSlice } from '@reduxjs/toolkit';
import db from '../../config/firebaseConfig';
import { addDoc, setDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import async service functions
import { fetchShelves, addShelf, deleteShelf } from '../services/addShelf';

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

export const delShelf = createAsyncThunk(
  'shelves/delete', 
  async (id) => {
    const deletedShelf = await deleteShelf(id);
    return deletedShelf;
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
        state.shelfArray.push(action.payload);
      })
      .addCase(getShelves.pending, (state) => {
        // state.shelves.status = 'loading'
    })
      .addCase(getShelves.fulfilled, (state, action) => {
        // state.shelves.status = 'succeeded'
        state.shelfArray = action.payload
      })
      .addCase(delShelf.fulfilled, (state, action)=>{
        state.shelfArray = state.shelfArray.filter((shelf)=>shelf.id !== action.payload);
      })
  }
  
});


export default shelfSlice.reducer;