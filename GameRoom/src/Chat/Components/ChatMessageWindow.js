import React from 'react';
import { connect } from "react-redux";
import { Col } from 'react-bootstrap'
import ChatMessage from './ChatMessage.js'
import '../StyleSheets/ChatMessageWindow.css';

const mapStateToProps = state => {
    return {
        Messages: state.Messages,
    };
};

const ReduxChatMessageWindow = (props) => (
    <Col xs={12} sm={12} md={12} lg={12}>
        {props.Messages && props.Messages.length > 0 && props.Messages.map((message, index) => (
            <ChatMessage message={message} />
        ))}
    </Col>

);

const ChatMessageWindow = connect(mapStateToProps)(ReduxChatMessageWindow);
export default ChatMessageWindow;