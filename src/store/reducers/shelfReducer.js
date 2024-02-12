import { createSlice } from '@reduxjs/toolkit';

export const shelfSlice = createSlice({
    name: "shelves",
    initialState: { value: [] },
    reducers: {
        createShelf: (state, action) => {
            console.log('created new shelf');
            state.value = action.payload
        },
    },
});

export const { createShelf } = shelfSlice.actions;

export default shelfSlice.reducer;
