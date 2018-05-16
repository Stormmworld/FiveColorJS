import React, { Component } from 'react';
import CreatePlayerModal from './CreatePlayerModal';
import Playfield from './Playfield.js';
import WaitingRoom from './WaitingRoom';
import '../StyleSheets/App.css';
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PlayerName: '',
      socket: openSocket('http://localhost:5001'),
      ChatMessages: [],
      ChatPlayers: [],
      PendingGames: [],
      showCreatePlayer: false,
    }

    this.state.socket.on('messages', messages => { this.setState({ ChatMessages: messages }) });
    this.state.socket.on('chatPlayers', players => { this.setState({ ChatPlayers: players }) });
    this.state.socket.on('pendingGames', games => { this.setState({ PendingGames: games }) });
    this.state.socket.on('createPlayer', name => { this.setState({ showCreatePlayer: (this.state.PlayerName === name), createPlayerName: name }) });
  }

  componentDidMount() {
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');

    this.setState({ PlayerName: playerName });
    this.state.socket.emit('playerName', playerName);
  }

  onCreateGame(name, format, playerCount, baseHitpoints) {
    this.state.socket.emit('CreateGame', { Name: name, Format: format, PlayerCount: playerCount, BaseHitpoints: baseHitpoints });
  }

  onSendMessage(message) {
    this.state.socket.emit('sendMessage', message);
  }

  onJoinGame(gameId) {
    this.state.socket.emit('JoinGame', gameId);
  }
  onLeaveGame(gameId) {
    this.state.socket.emit('leaveGame', gameId);
  }
  onStartGame(gameId) {
    this.state.socket.emit('StartGame', gameId);
  }
  onCreatePlayer(displayName, firstName, lastName) {
    this.state.socket.emit('onCreatePlayer', { DisplayName: displayName, FirstName: firstName, LastName: lastName });
    this.onCreatePlayerClosed();
  }
  onCreatePlayerClosed() {
    this.setState({ showCreatePlayer: false });
  }
  render() {
    return (
      <div className="container-fluid edgeless" >
        <WaitingRoom 
          PlayerName={this.state.PlayerName}
          sendMessage={this.onSendMessage.bind(this)}
          ChatMessages={this.state.ChatMessages}
          ChatPlayers={this.state.ChatPlayers}
          CreateGame={this.onCreateGame.bind(this)}
          pendingGames={this.state.PendingGames}
          onJoinGame={this.onJoinGame.bind(this)}
          onStartGame={this.onStartGame.bind(this)}
          onLeaveGame={this.onLeaveGame.bind(this)} />
        <CreatePlayerModal show={this.state.showCreatePlayer} onCreatePlayer={this.onCreatePlayer.bind(this)} onCreatePlayerClosed={this.onCreatePlayerClosed.bind(this)} displayName={this.state.PlayerName} />
      </div>
    );
  }
}
export default App;
