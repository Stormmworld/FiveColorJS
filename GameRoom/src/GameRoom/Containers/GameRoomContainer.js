import GameRoom from '../Components/GameRoom'
import {connect} from 'react-redux'
import { initializeChatSocket, sendMessage } from '../../Chat/Actions/chatActions';
import { initializeGameRoomSocket, logInPlayer } from '../../GameRoom/Actions/gameRoomActions';
import { initializeWaitingRoomSocket } from '../../WaitingRoom/Actions/waitingRoomActions';

const mapStateToProps = state => {
    return {
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