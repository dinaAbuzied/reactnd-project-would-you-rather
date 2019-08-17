import { combineReducers } from "redux";
import authedUser from "./authedUser";
import path from "./path";
import questions from "./questions";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({authedUser, path, questions, users, loadingBar: loadingBarReducer});