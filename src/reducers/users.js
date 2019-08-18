import { RECIEVE_USERS } from "../actions/users";

/**
 * @description this reducer handles the actions handling 
 *              - recieving the loaded users and 
 *                storing them in redux store
 * @param {object} state contains the loaded users from API
 * @param {object} action containes the fired action
 */
const users = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_USERS:
            return { ...action.users };
        default:
            return state;
    }
}

export default users;