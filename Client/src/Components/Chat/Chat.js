import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { Layout, Fixed, Flex } from 'react-layout-pane';
import ChatMessage from './ChatMessage.js'
import '../../StyleSheets/Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    };

    inputKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.sendMessage(this.state.message);
            this.setState({ message: '' })
        }
    }

    render() {
        return (
            <Layout type="column">
                <Fixed className="header chatHeader center-content name-container">
                    Signed in as {this.props.PlayerName}
                </Fixed>
                <Flex className="content scrollable">
                    {this.props.ChatMessages && this.props.ChatMessages.length > 0 && this.props.ChatMessages.map((message, index) => (
                        <ChatMessage message={message} />
                    ))}
                </Flex>
                <Fixed className="footer chatFooter chatMessageboxContainer">
                    <Col className="" xs={9} sm={9} md={9} lg={9}>
                        <input
                            className="chatMessagebox"
                            type="text"
                            value={this.state.message}
                            onChange={e => this.setState({ message: e.target.value })}
                            onKeyUp={this.inputKeyUp.bind(this)}
                        />
                    </Col>
                    <Col className="center-content" xs={3} sm={3} md={3} lg={3}>
                        <button className="chatSubmitButton" onClick={() => { this.props.sendMessage(this.state.message); this.setState({ message: '' }) }}>Send</button>
                    </Col>
                </Fixed>
            </Layout>
        );
    }
}

export default Chat;