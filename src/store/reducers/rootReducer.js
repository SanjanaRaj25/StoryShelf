import authReducer from "./authReducer";
import shelfReducer from "./shelfReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    shelves: shelfReducer
});

export default rootReducer