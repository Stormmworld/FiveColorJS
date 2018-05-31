import { SEND_MESSAGE, RECEIVE_MESSAGES } from "../constants/action-types";

const initialState = {
    Message: '',
    Messages: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return {...state, Messages: action.Messages} ;
        case SEND_MESSAGE:
            return {...state, Message:'', Messages: action.Payload} ;
        default:
            return state;
    }
};

export default chatReducer;