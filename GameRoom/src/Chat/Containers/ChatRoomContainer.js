import ChatRoom from '../Components/ChatRoom'
import {connect} from 'react-redux'
import { sendMessage } from '../Actions/chatActions'

const mapStateToProps = state => {
    return {
        Message: state.Chat.Message,
        PlayerData: state.GameRoom.PlayerData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (socket, playerId, message) => dispatch(sendMessage(socket, playerId, message))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatRoom)