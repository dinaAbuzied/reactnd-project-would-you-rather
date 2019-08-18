export const RECIEVE_USERS = "RECIEVE_USERS";

/**
 * @description used to retrieve from the API set of users
 * @param {Array} users containes the loaded users from the API
 */
export const recieveUsers = (users) => {
    return {
        type: RECIEVE_USERS,
        users
    }
}