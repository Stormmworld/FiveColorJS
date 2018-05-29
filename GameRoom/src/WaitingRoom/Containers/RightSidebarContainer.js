import WaitingRoom from '../Components/WaitingRoom'
import { connect } from 'react-redux'
import { showCreateGame } from '../../WaitingRoom/Actions/waitingRoomActions';

const mapStateToProps = state => {
    return {
        PendingGames: state.PendingGames,
        ChatPlayers: state.ChatPlayers,
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