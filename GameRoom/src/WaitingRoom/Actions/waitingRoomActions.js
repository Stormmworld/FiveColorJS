import { RECEIVE_PENDING_GAMES } from "../constants/action-types";
import axios from "axios"

//Outbound Socket Calls
export const createGame = (socket, game) => {
    return (dispatch) => {
        socket.emit('sendMessage', game)
    }
}

export const initializeWaitingRoomSocket = (socket) => {
    alert('initializing waiting room socket events');
	return (dispatch) => {
          socket.on('pendingGames', games => {
            dispatch(receivePendingGames(games))
          });
	}	
}

export const receivePendingGames = (games) => ({
	type: RECEIVE_PENDING_GAMES,
	Messages: games
})