import CreateGameModal from '../Components/CreateGameModal'
import { connect } from 'react-redux'
import { createGame } from '../../WaitingRoom/Actions/waitingRoomActions';

const mapStateToProps = state => {
    return {
        CreateGameVisible: state.CreateGameVisible,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createGame: (socket, game) => { createGame(socket, game) },
        showCreateGame : (showgame) => { showCreateGame(showGame)},
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGameModal)