import ChatRoom from '../Components/ChatRoom'
import {connect} from 'react-redux'
import { sendMessage } from '../Actions/chatAction'

const mapStateToProps = state => {
    return {
        Message: state.Message,
        PlayerName: state.PlayerName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: message => dispatch(sendMessage(message))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatRoom)