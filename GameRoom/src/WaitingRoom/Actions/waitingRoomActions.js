import { RECEIVE_PENDING_GAMES, SHOW_CREATE_GAME_MODAL, RECEIVE_CHAT_PLAYERS } from "../constants/action-types";
import axios from "axios"

//Outbound Socket Calls
export const createGame = (socket, game) => {
    return (dispatch) => {
        socket.emit('CreateGame', game)
    }
}

export const initializeWaitingRoomSocket = (socket) => {
    //alert('initializing waiting room socket events');
	return (dispatch) => {
          socket.on('chatPlayers', chatPlayers => {
            console.log('chat Players Recieved');
            dispatch(receiveChatPlayers(chatPlayers))
          });
          socket.on('pendingGames', games => {
            console.log('pending games Recieved');
            dispatch(receivePendingGames(games))
          });
	}	
}

export const receiveChatPlayers = (chatPlayers) => ({
	type: RECEIVE_CHAT_PLAYERS,
	ChatPlayers: chatPlayers
})

export const receivePendingGames = (games) => ({
	type: RECEIVE_PENDING_GAMES,
	PendingGames: games
})

export const showCreateGame = (showCreateGameModal) => ({
	type: SHOW_CREATE_GAME_MODAL,
	ShowCreateGameModal: showCreateGameModal
})
