import { createStore, combineReducers, applyMiddleware } from "redux";
import chatReducer from "../Chat/Reducers/chatReducer.js";
import WaitingRoomReducer from "../WaitingRoom/Reducers/WaitingRoomReducer.js";
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    Chat: chatReducer,
    WaitingRoom: WaitingRoomReducer
})

const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
)
export default store;