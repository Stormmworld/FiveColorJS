import { RECEIVE_PLAYER_DATA, PLAYER_NOT_FOUND } from "../constants/action-types";

const initialState = {
    ShowDeckBuilder: false,
    ShowCreatePlayer: false,
    PlayerData: null,
    LoginName:'',
};

const GameRoomReducer = (state = initialState, action) => {
    //console.log('game room reducer - action: ' + action.type )

    switch (action.type) {
        case RECEIVE_PLAYER_DATA:
            return { ...state, PlayerData: action.PlayerData, LoginName: action.LoginName, ShowCreatePlayer: false };
        case PLAYER_NOT_FOUND:
            return { ...state, PlayerData: null, LoginName: action.LoginName, ShowCreatePlayer: true };
        default:
            return state;
    }
};

export default GameRoomReducer;