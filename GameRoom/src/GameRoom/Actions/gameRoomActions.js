import { RECEIVE_PLAYER_DATA, PLAYER_NOT_FOUND } from "../constants/action-types";
import axios from "axios"

//Outbound Socket Calls
export const retrievePlayer = (socket, name) => {
  return (dispatch) => {
    socket.emit('sendMessage', name)
  }
}
export const logInPlayer = (socket, name) => {
  return (dispatch) => {
    socket.emit('LogIn', name);
  }
}

export const initializeGameRoomSocket = (socket) => {
  alert('initializing game room socket events');
  return (dispatch) => {
    socket.on('playerData', player => {
      dispatch(receivePlayerData(player))
    });
    socket.on('onPlayerNotFound', name => {
      dispatch(playerNotFound(name))
    });
  }
}


export const receivePlayerData = (player) => ({
  type: RECEIVE_PLAYER_DATA,
  Messages: player
})
export const playerNotFound = (name) => ({
  type: PLAYER_NOT_FOUND,
  Messages: messages
})