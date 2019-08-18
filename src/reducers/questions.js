import { RECIEVE_QUESTIONS, NEW_QUESTION } from "../actions/questions";

/**
 * @description this reducer handles the actions handling 
 *              - recieving the loaded questions and 
 *                storing them in redux store
 *              - saving new question added by current user
 * @param {object} state contains the loaded question from API
 * @param {object} action containes the fired action
 */
const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return { ...action.questions };
        case NEW_QUESTION:
            return { ...action.question };
        default:
            return state;
    }
}

export default questions;