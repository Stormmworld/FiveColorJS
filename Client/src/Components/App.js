import React, { Component } from 'react';
import CreatePlayerModal from './CreatePlayerModal';
import Playfield from './Playfield.js';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import '../StyleSheets/App.css';
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Player: {},
      MyGame: {},
      socket: openSocket('http://localhost:5001'),
      ChatMessages: [],
      ChatPlayers: [],
      PendingGames: [],
      showCreatePlayer: false,
    }

    this.state.socket.on('messages', messages => {
      //alert('messages' + messages);
      this.setState({ ChatMessages: messages })
    });
    this.state.socket.on('chatPlayers', players => {
      //alert('chat players' + players);
      this.setState({ ChatPlayers: players })
    });
    this.state.socket.on('PlayerData', player => {
      this.setState({ Player: player });
      this.state.socket.emit('AddChatPlayer', player);
    });
    this.state.socket.on('pendingGames', games => {
      //alert('pending games' + games);
      if (games && games.length > 0)
        for (var i = 0; i < games.length; i++)
          if (games[i] && games[i].Players && games[i].Players.length > 0)
            for (var j = 0; j < games[i].Players.length; j++)
              if (games[i].Players[j].Id == this.state.Player.Id) {
                this.setState({ MyGame: games[i] });
                j = games[i].Players.length;
                i = games.length;
              }
      this.setState({ PendingGames: games });
    });
    this.state.socket.on('createPlayer', name => { this.setState({ showCreatePlayer: (this.state.PlayerName === name), createPlayerName: name }) });
    window.addEventListener("beforeunload", function (e) {
      this.state.socket.emit('disconnect', this.state.Player.Id);
    }, false);
  }

  componentDidMount() {
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');
    this.state.socket.emit('LogIn', playerName);
  }

  onCreateGame(name, format, playerCount, baseHitpoints) {
    this.state.socket.emit('CreateGame', { Name: name, Format: format, PlayerCount: playerCount, BaseHitpoints: baseHitpoints, PlayerId: this.state.Player.Id });
  }

  onSendMessage(message) {
    this.state.socket.emit('sendMessage', { Message: message, PlayerId: this.state.Player.Id });
  }

  onJoinGame(gameId) {
    this.state.socket.emit('JoinGame', { GameId: gameId, PlayerId: this.state.Player.Id });
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
      <div className="container-fluid" >
        {this.state.Player.Id > 0 &&
          <WaitingRoom
            Player={this.state.Player}
            onSendMessage={this.onSendMessage.bind(this)}
            ChatMessages={this.state.ChatMessages}
            ChatPlayers={this.state.ChatPlayers}
            CreateGame={this.onCreateGame.bind(this)}
            PendingGames={this.state.PendingGames}
            MyGame = {this.state.MyGame}
            onJoinGame={this.onJoinGame.bind(this)}
            onStartGame={this.onStartGame.bind(this)}
            onLeaveGame={this.onLeaveGame.bind(this)} />}
        <CreatePlayerModal
          show={this.state.showCreatePlayer}
          onCreatePlayer={this.onCreatePlayer.bind(this)}
          onCreatePlayerClosed={this.onCreatePlayerClosed.bind(this)}
          displayName={this.state.PlayerName}
        />
      </div>
    );
  }
}
export default App;
