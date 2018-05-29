import { ADD_PENDING_GAME } from "../constants/action-types";

const initialState = {
    PendingGames: [],
};

const WaitingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PENDING_GAMES:
            return {...state, PendingGames: action.PendingGames} ;
        case SHOW_CREATE_GAME_MODAL:
            return {...state, CreateGameModalVisible: action.ShowCreateGameModal} ;
        default:
            return state;
    }
};

export default WaitingRoomReducer;