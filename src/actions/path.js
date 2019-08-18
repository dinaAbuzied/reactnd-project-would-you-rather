export const SET_PATH = "SET_PATH";

/**
 *
 * @param {string} path the entered URL
 * @description used to store the current URL so we 
 *              can redirect to it after login
 */
export const setPath = (path) => {
    return {
        type: SET_PATH,
        path
    }
}