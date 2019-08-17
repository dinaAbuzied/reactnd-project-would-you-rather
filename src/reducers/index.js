import { combineReducers } from "redux";
import authedUser from "./authedUser";
import location from "./location";
import questions from "./questions";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({authedUser, location, questions, users, loadingBar: loadingBarReducer});