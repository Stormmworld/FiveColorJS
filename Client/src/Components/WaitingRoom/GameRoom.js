import React from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import { Col } from 'react-bootstrap'
import ListPlayer from './ListPlayer';
import '../../StyleSheets/GameRoom.css';

const GameRoom = (props) => {

    return (
        <Layout type="column">.
            <Fixed className="header">
                {this.props.Game.Name}
            </Fixed>
            <Flex className="content">
                <Layout type="column">
                    <Flex className="content">
                        <Col className="edgeless Left-content pendingGameFormat" xs={6} sm={6} md={6} lg={6}>{this.props.Game.Format}</Col>
                        <Col className="edgeless Right-content pendingGameLife" xs={6} sm={6} md={6} lg={6}>Life: {this.props.Game.BaseHitpoints}</Col>
                    </Flex>
                    <Fixed className="sidebar">
                        {props.Game.Players.map((player) => (
                            <ListPlayer Player={player} />
                        ))}
                    </Fixed>
                </Layout>
            </Flex>
            <Fixed className="footer">
                <Col className="edgeless" xs={6} sm={6} md={6} lg={6}>
                    <button className="gameRoomLeaveButton" onClick={this.onLeaveGame.bind(this)}>Leave Game</button>
                </Col>
                <Col className="edgeless" xs={6} sm={6} md={6} lg={6}>
                    <button className="gameRoomReadyButton" onClick={this.onReadyGame.bind(this)}>Ready</button>
                </Col>
            </Fixed>
        </Layout>
    );
}
export default GameRoom;