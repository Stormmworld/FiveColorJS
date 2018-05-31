import ChatRoom from '../Components/ChatMessageWindow'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    //console.log(state.Chat.Messages);
    return {
        Messages: state.Chat.Messages,
    };
};

export default connect(
    mapStateToProps
)(ChatRoom)