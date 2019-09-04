export const RECIEVE_USERS = "RECIEVE_USERS";
export const ADD_QUESTION_TO_USER = " ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = " ADD_ANSWER_TO_USER";

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

/**
 * @param {string} userid id of the current user
 * @param {string} qid id of the selected question
 * @param {string} answer string representing selected option 
 *                          (either 'optionOne' - 'optionTwo')
 */
export const addAnswerToUser = (userid, qid, answer) => {
    return {
        type:  ADD_ANSWER_TO_USER,
        userid,
        qid,
        answer
    }
}