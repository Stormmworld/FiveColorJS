import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../../StyleSheets/PendingGame.css';

class PendingGame extends Component {
    constructor(props) {
        super(props);
    };

    JoinGame(gameId){
        this.props.onJoinGame(this.props.Game.Id);
    }

    render() {
    var currentGame = this.props.Game.Players.indexOf(this.props.PlayerName) > 0;
    var maxPlayers = (this.props.Players !== undefined ? this.props.Players.length : 0) === this.props.Game.PlayerCount;
    var currentPlayerCount = this.props.Game.Players !== undefined ? this.props.Game.Players.length : 0;
    //alert(this.props.Game.Id);
        return (
            <Col className="align-center pendingGameContainer" xs={12} sm={12} md={12} lg={12}>
                <Col className="edgeless pendingGameImage" xs={4} sm={4} md={4} lg={4} />
                <Col className="edgeless Left-content " xs={8} sm={8} md={8} lg={8}>
                    <Col className="edgeless Left-content pendingGameName" xs={12} sm={12} md={12} lg={12}>{this.props.Game.Name}</Col>
                    <Col className="edgeless Left-content pendingGamePlayerCount" xs={6} sm={6} md={6} lg={6}>
                        Players: {currentPlayerCount}/{this.props.Game.PlayerCount}
                    </Col>
                    <Col className="edgeless Right-content pendingGameLife" xs={6} sm={6} md={6} lg={6}>Life: {this.props.Game.BaseHitpoints}</Col>
                    <Col className="edgeless Left-content pendingGameFormat" xs={6} sm={6} md={6} lg={6}>{this.props.Game.Format}</Col>
                    <Col className="edgeless Right-content" xs={6} sm={6} md={6} lg={6}>
                        {!currentGame && !maxPlayers && <button className="pendingGameJoinButton" onClick={this.JoinGame.bind(this)}>Join</button>}
                    </Col>
                </Col>
            </Col>
        );
    }
}

export default PendingGame;

