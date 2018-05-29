import { ADD_PENDING_GAME } from "../constants/action-types";

const initialState = {
    PendingGames: [],
};

const WaitingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PENDING_GAME:
            return {...state, PendingGames: [...state.Messages, action.Payload]} ;
        default:
            return state;
    }
};

export default WaitingRoomReducer;