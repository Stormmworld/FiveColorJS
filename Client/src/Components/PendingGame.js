import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/PendingGame.css';

const PendingGame = function (props) {
    return (
        <Col className="align-center pendingGameContainer" xs={12} sm={12} md={12} lg={12}>
            <Col className="edgeless Left-content" xs={6} sm={6} md={6} lg={6}>Name: {props.Game.Name}</Col>
            <Col className="edgeless Left-content" xs={6} sm={6} md={6} lg={6}>Players: {props.Players!==undefined?props.Players.Length:0}/{props.Game.PlayerCount}</Col>
            <Col className="edgeless Left-content" xs={6} sm={6} md={6} lg={6}>Starting Life: {props.Game.BaseHitpoints}</Col>
            <Col className="edgeless Left-content" xs={6} sm={6} md={6} lg={6}>Format: {props.Game.Format}</Col>
            <Col className="edgeless Center-content" xs={12} sm={12} md={12} lg={12}>
                <button  onClick={() => {}}>Join</button>
            </Col>
        </Col>
    );
}

export default PendingGame;

