import App from './../Components/App';
import { connect } from 'react-redux';
import { updateDeck, retrieveDeck} from '../Redux/actions';
import { getDeck } from '../Selectors/AppSelectors';

const mapStateToProps = state => {
  return {
    deck: getDeck(state),
    hubConnection: null,
    playerName: null,
    message: null,
    ChatMessages: []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateDeck: (deck) => { dispatch(updateDeck(deck));
    },
    retrieveDeck: (deckId)=>{dispatch(retrieveDeck(deckId));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);