import { SHOW_CREATE_GAME_MODAL, RECEIVE_PENDING_GAMES, RECEIVE_CHAT_PLAYERS } from "../constants/action-types";

const initialState = {
    PendingGames: [],
    ChatPlayers: [],
};

const WaitingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PENDING_GAMES:
            return { ...state, PendingGames: action.PendingGames };
        case SHOW_CREATE_GAME_MODAL:
            return { ...state, CreateGameModalVisible: action.ShowCreateGameModal };
        case RECEIVE_CHAT_PLAYERS:
            return { ...state, ChatPlayers: action.ChatPlayers };
        default:
            return state;
    }
};

export default WaitingRoomReducer;