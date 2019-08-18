import { RECIEVE_QUESTIONS } from "../actions/questions";

/**
 * @description this reducer handles the actions handling 
 *              - recieving the loaded questions and 
 *                storing them in redux store
 * @param {object} state contains the loaded question from API
 * @param {object} action containes the fired action
 */
const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return { ...action.questions };
        default:
            return state;
    }
}

export default questions;