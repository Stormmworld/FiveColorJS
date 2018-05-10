import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import ListPlayer from './ListPlayer';
import CreateGameModal from './CreateGameModal';
import Mana from './Mana';
import '../StyleSheets/WaitingRoom.css';


class WaitingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            ChatroomHeight: 0,
            MessageWindowHeight: 0,
            RightControlsHeight: 0,
            RightListHeight: 0,
            showCreateGameModal: false
        }
    };
    componentWillMount() {
        this.updateHeights();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeights.bind(this));
    }

    inputKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.sendMessage(this.state.message);
            this.setState({ message: '' })
        }
    }

    onCreateGame(name, format, playerCount){

    }

    updateHeights() {
        this.setState({
            ChatroomHeight: (window.innerHeight) + 'px',
            MessageWindowHeight: (window.innerHeight - 80) + 'px',
            RightControlsHeight: ((window.innerHeight - 80) / 2) + 'px',
            RightListHeight: (((window.innerHeight - 80) / 2) - 40) + 'px',
        });
    }

    render() {
        return (
            <Col className="edgeless name-container chatHeader" xs={12} sm={12} md={12} lg={12} style={{ minHeight: this.state.ChatroomHeight, maxHeight: this.state.ChatroomHeight }}>
                <Col className="edgeless center-content name-container chatHeader" xs={12} sm={12} md={12} lg={12}>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='B' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='W' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='R' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='U' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='G' /></Col>
                    <Col className="edgeless center-content " xs={2} sm={2} md={2} lg={2}>Five Color Lobby</Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='B' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='W' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='R' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='U' /></Col>
                    <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='G' /></Col>
                </Col>
                <Col className="edgeless center-content name-container" xs={8} sm={8} md={8} lg={8}>
                    <Col className="messageWindowContainer scrollable" style={{ minHeight: this.state.MessageWindowHeight, maxHeight: this.state.MessageWindowHeight }} xs={12} sm={12} md={12} lg={12}>
                        {this.props.ChatMessages.map((message, index) => (
                            <span style={{ display: 'block' }} key={index}> ({message.Time}) {message.Name} : {message.Message} </span>
                        ))}
                    </Col>
                </Col>
                <Col className="edgeless center-content" xs={4} sm={4} md={4} lg={4}>
                    <Col className="edgeless center-content" style={{ minHeight: this.state.RightControlsHeight, maxHeight: this.state.RightControlsHeight }} xs={12} sm={12} md={12} lg={12}>
                        <Col className="edgeless center-content name-container" xs={12} sm={12} md={12} lg={12}>Players in Lobby</Col>
                        <Col className="edgeless center-content name-container scrollable" style={{ minHeight: this.state.RightListHeight, maxHeight: this.state.RightListHeight }} xs={12} sm={12} md={12} lg={12}>
                            {this.props.ChatPlayers.map((player) => (
                                <ListPlayer xs={12} sm={12} md={12} lg={12} playerName={player} />
                            ))}
                        </Col>
                    </Col>
                    <Col className="edgeless center-content name-container" style={{ minHeight: this.state.RightControlsHeight, maxHeight: this.state.RightControlsHeight }} xs={12} sm={12} md={12} lg={12}>
                        <Col className="edgeless center-content name-container" xs={12} sm={12} md={12} lg={12}>
                        Available Games 
                        <button className="chatSubmitButton" onClick={() => {  }}>Create</button>
                        </Col>
                        <Col className="edgeless center-content name-container scrollable" style={{ minHeight: this.state.RightListHeight, maxHeight: this.state.RightListHeight }} xs={12} sm={12} md={12} lg={12}>
                        </Col>
                    </Col>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <input
                        className="chatMessagebox"
                        type="text"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                        onKeyUp={this.inputKeyUp.bind(this)}
                    />
                    <button className="chatSubmitButton" onClick={() => { this.props.sendMessage(this.state.message); this.setState({ message: '' }) }}>Send</button>
                </Col>
            </Col>
        );
    }
}

export default WaitingRoom;