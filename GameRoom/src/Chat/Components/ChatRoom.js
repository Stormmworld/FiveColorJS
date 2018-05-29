import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { Layout, Fixed, Flex } from 'react-layout-pane';
import ChatMessageWindow from './ChatMessageWindow.js';
import '../StyleSheets/ChatRoom.css';

class ChatRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            Message: ''
        }
    }

    render() {
        return (
            <Layout type="column">
                <Fixed className="header chatHeader center-content name-container">
                    Signed in as {this.props.PlayerName}
                </Fixed>
                <Flex className="content scrollable">
                    <ChatMessageWindow />
                </Flex>
                <Fixed className="footer chatFooter chatMessageboxContainer">
                    <Col className="" xs={9} sm={9} md={9} lg={9}>
                        <input
                            className="chatMessagebox"
                            type="text"
                            value={this.state.Message}
                            onChange={e => this.setState({ Message: e.target.value })}
                            onKeyUp={(event) => { 
                                if (event.keyCode === 13) {
                                    this.props.sendMessage(this.state.Message);
                                }
                            }}
                        />
                    </Col>
                    <Col className="center-content" xs={3} sm={3} md={3} lg={3}>
                        <button
                            className="chatSubmitButton"
                            onClick={() => {                                 
                                this.props.sendMessage(this.state.Message); 
                                this.setState({Message: ''})}}>
                            Send
                    </button>
                    </Col>
                </Fixed>
            </Layout>
        );
    }
}

export default ChatRoom;