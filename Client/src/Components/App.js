import React, { Component } from 'react';
import Playfield from './Playfield.js';
import WaitingRoom from './WaitingRoom';
import '../StyleSheets/App.css';
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PlayerName: '',
      socket: openSocket('http://localhost:1337'),
      ChatMessages: [],
      ChatPlayers:[],
      PendingGames:[],
    }

    this.state.socket.on('messages', messages => {this.setState({ChatMessages: messages})});    
    this.state.socket.on('chatPlayers', players => {this.setState({ChatPlayers: players})});
    this.state.socket.on('pendingGames',games => {this.setState({PendingGames:games})});
  }
  
  componentDidMount() {
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');

    this.setState({ PlayerName: playerName });
    this.state.socket.emit('playerName', playerName);
  }

  onCreateGame(name, format, playerCount){
    this.state.socket.emit('CreateGame', {Name:name, Format:format, PlayerCount:playerCount});
  }

  onSendMessage(message){
     this.state.socket.emit('sendMessage', message);
  }

  render() {
    return (
      <div className="container-fluid edgeless" >
        <WaitingRoom sendMessage={this.onSendMessage.bind(this)} 
                     ChatMessages={this.state.ChatMessages} 
                     ChatPlayers={this.state.ChatPlayers} 
                     CreateGame={this.onCreateGame.bind(this)}
                     pendingGames={this.state.PendingGames}/>
      </div>
    );
  }
}
export default App;
