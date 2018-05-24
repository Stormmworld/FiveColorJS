import React from 'react';
import { Col } from 'react-bootstrap'
import ListPlayer from './ListPlayer';
import '../../StyleSheets/GameRoom.css';

const GameRoom = (props) => {

    return (
        <Col className="gameRoom" xs={12} sm={12} md={12} lg={12}>
            <Col className="gameRoomDetails" xs={9} sm={9} md={9} lg={9}>
                <Col className="center-content gameRoomButtonContainer" xs={6} sm={6} md={6} lg={6}>
                    <button className="gameRoomButton" onClick={props.onLeaveGame}>Leave Game</button>
                </Col>
                <Col className="center-content gameRoomButtonContainer" xs={6} sm={6} md={6} lg={6}>
                    <button className="gameRoomButton" onClick={props.onReadyGame}>Ready</button>
                </Col>
                <Col className="center-content gameRoomText" xs={4} sm={4} md={4} lg={4}>Current Game: {props.Game.Name}</Col>
                <Col className="center-content gameRoomText" xs={4} sm={4} md={4} lg={4}>Legality Format: {props.Game.Format}</Col>
                <Col className="center-content gameRoomText" xs={4} sm={4} md={4} lg={4}>Starting Life: {props.Game.BaseHitpoints}</Col>
            </Col>
            <Col className="gameRoomPlayerList" xs={3} sm={3} md={3} lg={3}>
                {props.Game.Players && props.Game.Players.map((player) => (
                    <ListPlayer Player={player} />
                ))}
            </Col>
        </Col>
    );
}
export default GameRoom;