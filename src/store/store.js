import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import shelfReducer from './reducers/shelfReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        shelves: shelfReducer
    },

})