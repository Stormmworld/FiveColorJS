import GameRoom from '../Components/GameRoom'
import {connect} from 'react-redux'
import { initializeChatSocket, sendMessage } from '../../Chat/Actions/chatActions';
import { initializeGameRoomSocket, logInPlayer } from '../../GameRoom/Actions/gameRoomActions';
import { initializeWaitingRoomSocket } from '../../WaitingRoom/Actions/waitingRoomActions';

const mapStateToProps = state => {
    //console.log('game room mapping state to props ' + JSON.stringify(state));
    return {
        ShowDeckBuilder: state.GameRoom.ShowDeckBuilder,
        ShowCreatePlayer: state.GameRoom.ShowCreatePlayer,
        PlayerData: state.GameRoom.PlayerData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initializeSocket: socket =>{
            //alert('initializing socket');
            dispatch(initializeChatSocket(socket));
            dispatch(initializeGameRoomSocket(socket));
            dispatch(initializeWaitingRoomSocket(socket));
        },
        logInPlayer: (socket,name) => dispatch(logInPlayer(socket,name)),
        sendMessage: message => dispatch(sendMessage(message)),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameRoom)