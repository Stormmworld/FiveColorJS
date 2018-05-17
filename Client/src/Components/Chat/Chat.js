import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { Layout, Fixed, Flex } from 'react-layout-pane';
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
                    {this.props.ChatMessages.map((message, index) => (
                        <span style={{ display: 'block' }} key={index}> ({message.Time}) {message.Name} : {message.Message} </span>
                    ))}
                </Flex>
                <Fixed className="footer">
                    <Col className="edgeless" xs={9} sm={9} md={9} lg={9}>
                        <input
                            className="chatMessagebox"
                            type="text"
                            value={this.state.message}
                            onChange={e => this.setState({ message: e.target.value })}
                            onKeyUp={this.inputKeyUp.bind(this)}
                        />
                    </Col>
                    <Col className="edgeless center-content" xs={3} sm={3} md={3} lg={3}>
                        <button className="chatSubmitButton" onClick={() => { this.props.sendMessage(this.state.message); this.setState({ message: '' }) }}>Send</button>
                    </Col>
                </Fixed>
            </Layout>
        );
    }
}

export default Chat;