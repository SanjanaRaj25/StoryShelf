import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/user';
import shelfReducer from './reducers/shelfReducer';


const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        shelves: shelfReducer
    },
    devTools: true,

})

export default store;