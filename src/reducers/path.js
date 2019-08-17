import { SET_PATH } from "../actions/path";

const path = (state = '/', action) => {
    switch (action.type) {
        case SET_PATH:
            return action.path;
        default:
            return state;
    }
}

export default path;