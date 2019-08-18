export const RECIEVE_USERS = "RECIEVE_USERS";
export const ADD_QUESTION_TO_USER = " ADD_QUESTION_TO_USER";

/**
 * @description used to retrieve from the API set of users
 * @param {Object} users containes the loaded users from the API
 */
export const recieveUsers = (users) => {
    return {
        type: RECIEVE_USERS,
        users
    }
}

/**
 * @description add question id to questions array
 * @param {string} userID
 * @param {string} queID 
 */
export const addQuestionToUser = (userID, queID) => {
    return {
        type:  ADD_QUESTION_TO_USER,
        userID,
        queID
    }
}