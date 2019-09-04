import { getInitialData } from "../utils/api";
import { setPath } from "./path";
import { recieveQuestions, saveNewQuestion, answerQuestion } from "./questions";
import { recieveUsers, addQuestionToUser, addAnswerToUser } from "./users";
import { addQuestionToAuthedUser, addAnswerToAuthedUser } from "./authedUser";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
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

/**
 * @description takes new question details and current user id and 
 *              save it and store the entered URL in Redux store
 * @param {author: string, optionOneText: string, optionTwoText: string} que object containing question detials
 * @param {string} path contains current URL
 */
export const handleSaveQuestion = (que, path) => {
    return (dispatch) => {
        return saveQuestion(que).then((formattedQue) => {
            dispatch(saveNewQuestion(formattedQue));
            dispatch(addQuestionToAuthedUser(formattedQue.id));
            dispatch(addQuestionToUser(formattedQue.author, formattedQue.id));
            dispatch(setPath(path));
        });
    }
}

/**
 * @param {string} authedUser current user id
 * @param {string} qid selected question id
 * @param {string} answer string representing selected option 
 *                          (either 'optionOne' - 'optionTwo')
 */
export const handleSaveQuestionAnswer = (authedUser, qid, answer) => {
    return (dispatch) => {
        return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(addAnswerToAuthedUser(qid, answer));
            dispatch(addAnswerToUser(authedUser, qid, answer));
            dispatch(answerQuestion(authedUser, qid, answer));
        });
    }
}