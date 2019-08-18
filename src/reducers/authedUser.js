import { SET_AUTHED_USER, REMOVE_AUTHED_USER, ADD_QUESTION_TO_AUTHED_USER } from "../actions/authedUser";

/**
 * @description this reducer handles the actions handling 
 *              authenticating users on login by storing 
 *              the user data in redux store and removing 
 *              the user from store on logout
 * @param {object} state contains current signed in user if available
 * @param {object} action containes the fired action
 */
const authedUser = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {...action.user};
        case REMOVE_AUTHED_USER:
            return null;
        case ADD_QUESTION_TO_AUTHED_USER:
            return {
                ...state,
                questions: [...state.questions, action.id]
            }
        default:
            return state;
    }
}

export default authedUser;