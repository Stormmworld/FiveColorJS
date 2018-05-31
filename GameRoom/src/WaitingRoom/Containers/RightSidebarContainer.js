import RightSidebar from '../Components/RightSidebar'
import { connect } from 'react-redux'
import { showCreateGame } from '../../WaitingRoom/Actions/waitingRoomActions';

const mapStateToProps = state => {
    return {
        PendingGames: state.WaitingRoom.PendingGames,
        ChatPlayers: state.WaitingRoom.ChatPlayers,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ShowCreateGameModal: (showModal) => { showCreateGame(showModal) }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RightSidebar)