import { SEND_MESSAGE } from "../constants/action-types";

const initialState = {
    Message: '',
    Messages: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, Message:'', Messages: action.Payload} ;
        default:
            return state;
    }
};

export default chatReducer;