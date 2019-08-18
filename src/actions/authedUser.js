export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";
export const ADD_QUESTION_TO_AUTHED_USER = " ADD_QUESTION_TO_AUTHED_USER";

/**
 * @param {{answers:{}, avatarURL: string, id: string, name: string, questions: []}} user 
 * @description Used on Login to store the choosen User
 */
export const setAuthedUser = (user) => {
    return {
        type: SET_AUTHED_USER,
        user
    }
}

/**
 * @description Used on Logout to remove stored Users
 */
export const removeAuthedUser = () => {
    return {
        type: REMOVE_AUTHED_USER
    }
}

/**
 * @description add question id to questions array
 * @param {string} id 
 */
export const addQuestionToAuthedUser = (id) => {
    return {
        type:  ADD_QUESTION_TO_AUTHED_USER,
        id
    }
}