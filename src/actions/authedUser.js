export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";
/**
 * 
 * @param {{answers:{}, avatarURL: string, id: string, name: string, questions: []}} user 
 * @description Used on Login to store the choosen User
 * 
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