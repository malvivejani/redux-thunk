import { combineReducers } from "redux";
import { userListReducer } from "../reduce/UserReducer";

const rootReducer = combineReducers({
    userList: userListReducer,
});

export default rootReducer;