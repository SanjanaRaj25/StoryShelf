import authReducer from "./authReducer";
import { shelfSlice } from "./shelfReducer";
import { userSlice } from './user';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    auth: authReducer,
    shelves: shelfSlice.reducer
});

export default rootReducer