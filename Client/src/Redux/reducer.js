import { RETRIEVE_DECK, RESET_STATE, GET_DECK } from './../Constants/ActionTypes';
import { getDeck } from './../Mocker';

const initialState = {
  deck:[]// getDeck()
};

const Reducer = function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECK: {
      //alert(action.type);
      return {
        ...state,
        deck: action.deck
      };
    }
    case RETRIEVE_DECK + '_FULFILLED': {
      //alert(action.type);
      return {
        ...state,
        deck: action.payload,
      };
    }
    case RESET_STATE: {
      //alert(action.type);
      return initialState;
    }
    default: {
      //alert(action.type);
      return state;
    }
  }
};
export default Reducer;