import React, { Component } from 'react';
import CreatePlayerModal from './CreatePlayerModal';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import Playfield from './MtgGame/Playfield';
import DeckBuilder from './DeckBuilder/DeckBuilder';
import '../StyleSheets/App.css';
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Player: {},
      MyGame: {},
      AvailableDecks: [],
      socket: openSocket('https://72.49.137.37:5001'),
      //socket: openSocket('https://localhost:5001'),
      ChatMessages: [],
      ChatPlayers: [],
      PendingGames: [],
      showCreatePlayer: false,
      showDeckBuilder: false,
      CreatePlayerName: ''
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
      if (games && games.length > 0)
        for (var i = 0; i < games.length; i++)
          if (games[i] && games[i].Players && games[i].Players.length > 0)
            for (var j = 0; j < games[i].Players.length; j++)
              if (games[i].Players[j].Id === this.state.Player.Id) {
                this.setState({ MyGame: games[i] });
                //alert('pending games' + games[i]);
                j = games[i].Players.length;
                i = games.length;
                break;
              }
      this.setState({ PendingGames: games });
    });
    this.state.socket.on('createPlayer', name => {
      this.setState({
        showCreatePlayer: true,
        CreatePlayerName: name
      })
    });
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
  onCreatePlayer(displayName, firstName, lastName) {
    this.state.socket.emit('onCreatePlayer', { DisplayName: displayName, FirstName: firstName, LastName: lastName });
    this.onCreatePlayerClosed();
  }
  onCreatePlayerClosed() {
    this.setState({ showCreatePlayer: false });
  }
  onJoinGame(gameId) {
    this.state.socket.emit('JoinGame', { GameId: gameId, PlayerId: this.state.Player.Id });
  }
  onLeaveGame() {
    this.state.socket.emit('LeaveGame', this.state.Player.Id);
  }
  onReadyGame(gameId) {
    this.state.socket.emit('ReadyGame', { GameId: gameId, PlayerId: this.state.Player.Id, Ready: !this.state.Player.IsReady });
  }
  onSendMessage(message) {
    this.state.socket.emit('sendMessage', { Message: message, PlayerId: this.state.Player.Id });
  }

  render() {
    return (
      <div className="container-fluid" >
        {/* {this.state.showDeckBuilder &&
          <DeckBuilder
            onSaveDeck={}
            onDeckBuilderClosed={}
          />
        } */}
        {!this.state.showDeckBuilder && this.state.Player.Id > 0 && !this.state.Player.GameStarted &&
          <WaitingRoom
            Player={this.state.Player}
            AvailableDecks={this.state.AvailableDecks}
            onSendMessage={this.onSendMessage.bind(this)}
            ChatMessages={this.state.ChatMessages}
            ChatPlayers={this.state.ChatPlayers}
            CreateGame={this.onCreateGame.bind(this)}
            PendingGames={this.state.PendingGames}
            MyGame={this.state.MyGame}
            onJoinGame={this.onJoinGame.bind(this)}
            onReadyGame={this.onReadyGame.bind(this)}
            onLeaveGame={this.onLeaveGame.bind(this)} />}
        {this.state.Player.Id > 0 && this.state.Player.GameStarted &&
          <Playfield
          />
        }
        <CreatePlayerModal
          show={this.state.showCreatePlayer}
          onCreatePlayer={this.onCreatePlayer.bind(this)}
          onCreatePlayerClosed={this.onCreatePlayerClosed.bind(this)}
          displayName={this.state.CreatePlayerName}
        />
      </div>
    );
  }
}
export default App;
