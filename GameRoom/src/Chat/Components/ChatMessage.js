import React from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/ChatMessage.css';

const ChatMessage = (props) => {
    console.log('render chat message' + JSON.stringify(props.message))
    return (
        <Col className="edgeless chatMessageContainer" xs={12} sm={12} md={12} lg={12}>
        <Col className="chatMessageText chatMessageName center-content" xs={1} sm={1} md={1} lg={1}>
            {props.message.Timestamp} 
        </Col>
            <Col className="chatMessageText chatMessagePlayer center-content" xs={2} sm={2} md={2} lg={2}>
                {props.message.PlayerName}
            </Col>
            <Col className="chatMessageText chatMessage Left-content" xs={9} sm={9} md={9} lg={9}>
                {props.message.Message}
            </Col>
        </Col>
    );
}
export default ChatMessage;