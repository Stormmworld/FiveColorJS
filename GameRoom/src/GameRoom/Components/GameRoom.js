import React, { Component } from "react";
import { connect } from 'react-redux'
import WaitingRoom from '../../WaitingRoom/Containers/WaitingRoomContainer';
import io from "socket.io-client";
import '../StyleSheets/GameRoom.css';

class GameRoom extends Component {
  constructor(props) {
    super(props);
    window.gameSocket = io.connect("http://localhost:5001");
    this.props.initializeSocket(window.gameSocket);
    //console.log(window.gameSocket);
    //console.log('initialied socket');
  }

  componentDidMount() {
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');
    this.props.logInPlayer(window.gameSocket, playerName);
    //console.log('firing login player')
  }

  render() {
    //console.log('gameroom render props ' + JSON.stringify(this.props));
    return (
      <div className="container-fluid" >
        {this.props.showDeckBuilder &&
          <DeckBuilder
            onDeckBuilderClosed={this.closeDeckBuilder.bind(this)}
          />
        }
        {!this.props.showDeckBuilder && this.props.PlayerData && this.props.PlayerData.Id > 0 && !this.props.PlayerData.GameStarted &&
          <WaitingRoom />}
        {this.props.PlayerData && this.props.PlayerData.Id > 0 && this.props.PlayerData.GameStarted &&
          <Playfield />
        }
        {/* <CreatePlayerModal /> */}
      </div>
    );
  }
}
export default GameRoom;
