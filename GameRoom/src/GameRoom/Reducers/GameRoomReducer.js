import { CREATE_PLAYER } from "../constants/action-types";

const initialState = {
    PendingGames: [],
};

const GameRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default GameRoomReducer;