import WaitingRoom from '../Components/WaitingRoom'
import {connect} from 'react-redux'
import {  } from '../../WaitingRoom/Actions/waitingRoomActions';

const mapStateToProps = state => {
    return {
        CreateGameModalVisible: state.WaitingRoom.CreateGameModalVisible,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showCreateGame: (showModal) => { showCreateGame(showModal) }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingRoom)