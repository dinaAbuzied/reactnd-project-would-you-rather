import { getInitialData } from "../utils/api";
import { setPath } from "./path";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const handleInitData = (path) => {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(recieveQuestions(questions));
            dispatch(recieveUsers(users));
            dispatch(setPath(path));
            dispatch(hideLoading());
        });
    }
}