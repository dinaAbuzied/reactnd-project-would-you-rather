import { showLoading, hideLoading } from "react-redux-loading";
import { getQuestions } from "../utils/api";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

export const recieveQuestions = (questions) => {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export const handleRecieveQuestions = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions().then(({questions}) => {
            dispatch(recieveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}