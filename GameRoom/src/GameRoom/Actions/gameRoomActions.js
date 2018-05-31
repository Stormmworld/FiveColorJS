import { RECEIVE_PLAYER_DATA, PLAYER_NOT_FOUND,ADD_CHAT_PLAYER } from "../constants/action-types";
import axios from "axios"

//Outbound Socket Calls
export const retrievePlayer = (socket, name) => {
  return (dispatch) => {
    socket.emit('sendMessage', name)
  }
}
export const logInPlayer = (socket, name) => {
  //console.log('login player fired socket id:' + socket.id + ' name:' + name)
  return (dispatch) => {
    socket.emit('LogIn', name);
  }
}
export const addChatPlayer = (socket, playerData) => {
  console.log('add Chat Player fired socket id:' + socket.id + ' name:' + name)
  return (dispatch) => {
    socket.emit('AddChatPlayer', playerData);
  }
}

export const initializeGameRoomSocket = (socket) => {
  //alert('initializing game room socket events');
  return (dispatch) => {
    socket.on('PlayerData', player => {
      console.log('player data Recieved');
      dispatch(receivePlayerData(player));
      dispatch(addChatPlayer(socket, player));
    });
    socket.on('onPlayerNotFound', name => {
      //console.log('player not found Recieved');
      dispatch(playerNotFound(name))
    });
  }
}


export const receivePlayerData = (player) => ({
  type: RECEIVE_PLAYER_DATA,
  PlayerData: player
})
export const playerNotFound = (name) => ({
  type: PLAYER_NOT_FOUND,
  Name: name
})