import { getInitialData } from "../utils/api";
import { setPath } from "./path";
import { recieveQuestions, saveNewQuestion } from "./questions";
import { recieveUsers } from "./users";
import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

/**
 * @description this function is called when the app starts to 
 *              load the users and questions and store the entered 
 *              URL in Redux store
 * @param {string} path contains current URL
 */
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

export const handleSaveQuestion = (que, path) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion(que).then((formattedQue) => {
            dispatch(saveNewQuestion(formattedQue));
            dispatch(setPath(path));
            dispatch(hideLoading());
        });
    }
}