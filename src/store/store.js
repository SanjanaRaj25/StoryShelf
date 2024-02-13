import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import authReducer from './reducers/authReducer';
import userReducer from './reducers/user';
import shelfReducer from './reducers/shelfReducer';

import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    storage,
  };

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    shelves: shelfReducer,
});

  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: true,
})

export const persistor = persistStore(store);

export default store;