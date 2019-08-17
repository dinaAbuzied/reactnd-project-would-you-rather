import { SET_LOCATION } from "../actions/location";

const location = (state = '/', action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {...action.location};
        default:
            return state;
    }
}

export default location;