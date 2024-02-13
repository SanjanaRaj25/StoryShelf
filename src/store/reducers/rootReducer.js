import authReducer from "./authReducer";
import shelfReducer from "./shelfReducer";
import { userSlice } from './user';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    auth: authReducer,
    shelves: shelfReducer,
});

export default rootReducer