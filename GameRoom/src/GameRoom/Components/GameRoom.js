import React, { Component} from "react";
import {connect} from 'react-redux'
import WaitingRoom from '../../WaitingRoom/Containers/WaitingRoomContainer';
import io from "socket.io-client";
let socket

class GameRoom extends Component {
    constructor(props) {
      super(props);  
      socket = io.connect("http://localhost:5001");
      this.props.initializeSocket(socket);
    }
  
    componentDidMount() {
      var playerName = window.prompt('Your name:', '');
      while (playerName === '' || !playerName)
        playerName = window.prompt('Name:', '');
      this.props.logInPlayer(socket,playerName);
    }
  
    render() {
      return (
        <div className="container-fluid" >
          {this.props.showDeckBuilder &&
            <DeckBuilder
              onDeckBuilderClosed={this.closeDeckBuilder.bind(this)}
            />
          }
          {!this.props.showDeckBuilder && this.props.Player && this.props.Player.Id > 0 && !this.props.Player.GameStarted &&
            <WaitingRoom />}
          {this.props.Player && this.props.Player.Id > 0 && this.props.Player.GameStarted &&
            <Playfield />
          }
          {/* <CreatePlayerModal /> */}
        </div>
      );
    }
  }
  export default GameRoom;
  