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
    }

    this.state.socket.on('messages', messages => {this.setState({ChatMessages: messages})});    
    this.state.socket.on('chatPlayers', players => {this.setState({ChatPlayers: players})});
  }
  
  componentDidMount() {
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');

    this.setState({ PlayerName: playerName });
    this.state.socket.emit('playerName', playerName);
  }

  onSendMessage(message){
     this.state.socket.emit('sendMessage', message);
  }

  render() {
    return (
      <div className="container-fluid edgeless" >
        <WaitingRoom sendMessage={this.onSendMessage.bind(this)} ChatMessages={this.state.ChatMessages} ChatPlayers={this.state.ChatPlayers}/>
      </div>
    );
  }
}
export default App;
