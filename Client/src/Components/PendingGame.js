import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/PendingGame.css';

const PendingGame = function (props) {
    return (
        <Col className="align-center" xs={12} sm={12} md={12} lg={12}>
            <Col xs={12} sm={12} md={12} lg={12}>Name: {props.Game.Name}</Col>
            <Col xs={12} sm={12} md={12} lg={12}>Players: {props.Players.Length}/{props.Game.PlayerCount}</Col>
            <Col xs={12} sm={12} md={12} lg={12}>Format: {props.Game.Format}</Col>
        </Col>
    );
}

export default PendingGame;

