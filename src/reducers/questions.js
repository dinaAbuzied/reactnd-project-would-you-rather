import { RECIEVE_QUESTIONS, NEW_QUESTION, ANSWER_QUESTION } from "../actions/questions";

/**
 * @description this reducer handles the actions handling 
 *              - recieving the loaded questions and 
 *                storing them in redux store
 *              - saving new question added by current user
 *              - saving answers given by current user
 * @param {object} state contains the loaded question from API
 * @param {object} action containes the fired action
 */
const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return { ...action.questions };
        case NEW_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...state[action.qid][action.answer].votes, action.authedUser]
                    }
                }
            }
        default:
            return state;
    }
}

export default questions;