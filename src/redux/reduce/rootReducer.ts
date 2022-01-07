import { combineReducers } from "redux";
import { userListReducer } from "./UserReducer";
import { postReducer } from "./PostReducer";

const rootReducer = combineReducers({
    userList: userListReducer,
    postList: postReducer,
});

export default rootReducer;