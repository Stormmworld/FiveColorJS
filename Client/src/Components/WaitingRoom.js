import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/WaitingRoom.css';

class WaitingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    };
    render() {
        return (
            <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                <Col className="edgeless center-content name-container" xs={6} sm={6} md={6} lg={6}>
                    Lobby Chat
                    <input
                        type="text"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                    />
                    <button onClick={() => this.props.sendMessage(this.state.message)}>Send</button>
                    <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                        {this.props.ChatMessages.map((message, index) => (
                            <span style={{ display: 'block' }} key={index}> {message} </span>
                        ))}
                    </Col>
                </Col>
                <Col className="edgeless center-content name-container" xs={6} sm={6} md={6} lg={6}>
                    <Col className="edgeless center-content name-container" xs={12} sm={12} md={12} lg={12}>
                        Available Games
            </Col>
                    <Col className="edgeless center-content name-container" xs={12} sm={12} md={12} lg={12}>
                        Your Game
            </Col>
                </Col>
            </Col>
        );
    }
}

export default WaitingRoom;