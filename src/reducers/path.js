import { SET_PATH } from "../actions/path";

/**
 * @description this reducer handles the actions 
 *              fire when the URL is changed either 
 *              by clicking on a link inside the app 
 *              or entering a URL in the address bar
 * @param {string} state conatins the entered URL
 * @param {object} action conatins the fired action
 */
const path = (state = '/', action) => {
    switch (action.type) {
        case SET_PATH:
            if (action.path === "/login" || action.path === "/") {
                return "/home";
            }
            return action.path;
        default:
            return state;
    }
}

export default path;