import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/PendingGame.css';

const PendingGame = function (props) {
    var currentGame = props.Game.Players.indexOf(props.PlayerName) > 0;
    var maxPlayers = (props.Players !== undefined ? props.Players.length : 0) === props.Game.PlayerCount;
    var currentPlayerCount = props.Game.Players !== undefined ? props.Game.Players.length : 0;
    return (
        <Col className="align-center pendingGameContainer" xs={12} sm={12} md={12} lg={12}>
            <Col className="edgeless pendingGameImage" xs={4} sm={4} md={4} lg={4} />
            <Col className="edgeless Left-content " xs={8} sm={8} md={8} lg={8}>
                <Col className="edgeless Left-content pendingGameName" xs={12} sm={12} md={12} lg={12}>{props.Game.Name}</Col>
                <Col className="edgeless Left-content pendingGamePlayerCount" xs={6} sm={6} md={6} lg={6}>
                    Players: {currentPlayerCount}/{props.Game.PlayerCount}
                </Col>
                <Col className="edgeless Right-content pendingGameLife" xs={6} sm={6} md={6} lg={6}>Life: {props.Game.BaseHitpoints}</Col>
                <Col className="edgeless Left-content pendingGameFormat" xs={6} sm={6} md={6} lg={6}>{props.Game.Format}</Col>
                <Col className="edgeless Right-content" xs={6} sm={6} md={6} lg={6}>
                    {!currentGame && maxPlayers && <button className="pendingGameJoinButton" onClick={() => props.onStartGame(props.Game.Id)}>Start</button>}
                    {!currentGame && !maxPlayers && <button className="pendingGameJoinButton" onClick={() => props.onJoinGame(props.Game.Id)}>Join</button>}
                    {currentGame && <button className="pendingGameJoinButton" onClick={() => props.onLeaveGame(props.Game.Id)}>Leave</button>}
                </Col>
            </Col>
        </Col>
    );
}

export default PendingGame;

