import { showLoading, hideLoading } from "react-redux-loading";
import { getUsers } from "../utils/api";

export const RECIEVE_USERS = "RECIEVE_USERS";

export const recieveUsers = (users) => {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export const handleRecieveUsers = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return getUsers().then((users) => {
            dispatch(recieveUsers(users));
            dispatch(hideLoading());
        });
    }
}