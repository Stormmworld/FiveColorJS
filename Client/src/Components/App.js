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
    }

    let self = this
    this.state.socket.on('messages', messages => {
      this.setState(...self.state, {Messages: messages})
    });
  }
  
  componentDidMount() {
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');

    this.setState({ PlayerName: playerName });
    this.state.socket.emit('playerName', playerName);
  }

  onSendMessage = message => this.state.socket.emit('sendMessage', message);

  render() {
    return (
      <div className="container-fluid edgeless" >
        <WaitingRoom sendMessage={this.onSendMessage.bind(this)} ChatMessages={this.props.ChatMessages} />
      </div>
    );
  }
}
export default App;
