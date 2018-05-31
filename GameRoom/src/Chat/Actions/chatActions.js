import { RECEIVE_MESSAGES, RECEIVE_CHAT_PLAYERS } from "../constants/action-types";
import axios from "axios"

//Outbound Socket Calls
export const sendMessage = (socket, playerId, message) => {
    return (dispatch) => {
        let postData = {
            PlayerId: playerId,
            Message: message,
        }
        socket.emit('sendMessage', postData)
    }
}

export const initializeChatSocket = (socket) => {
    //alert('initializing chat room socket events');
    return (dispatch) => {
        socket.on('messages', messages => {
            //console.log('messages Recieved' + JSON.stringify(messages));
            dispatch(receiveMessages(messages))
        });
        socket.on('chatPlayers', players => {
            //console.log('chatPlayers Recieved');
            dispatch(receiveMessages(players))
        });
    }
}

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    Messages: messages
})
export const chatPlayers = (players) => ({
    type: RECEIVE_CHAT_PLAYERS,
    ChatPlayers: players
})
