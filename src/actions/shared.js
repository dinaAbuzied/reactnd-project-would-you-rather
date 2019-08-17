import { getInitialData } from "../utils/api";
import { setLocation } from "./location";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const handleInitData = (location) => {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(recieveQuestions(questions));
            dispatch(recieveUsers(users));
            dispatch(setLocation(location));
            dispatch(hideLoading());
        });
    }
}