import React from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import { Col } from 'react-bootstrap'
import ListPlayer from './ListPlayer';
import '../../StyleSheets/GameRoom.css';

const GameRoom = (props) => {

    return (
        <Layout type="column">.
            <Fixed className="header">
                {props.Game.Name}
            </Fixed>
            <Flex className="content">
                <Layout type="column">
                    <Flex className="content">
                        <Col className="edgeless Left-content pendingGameFormat" xs={6} sm={6} md={6} lg={6}>{props.Game.Format}</Col>
                        <Col className="edgeless Right-content pendingGameLife" xs={6} sm={6} md={6} lg={6}>Life: {props.Game.BaseHitpoints}</Col>
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
                    <button className="gameRoomLeaveButton" onClick={props.onLeaveGame}>Leave Game</button>
                </Col>
                <Col className="edgeless" xs={6} sm={6} md={6} lg={6}>
                    <button className="gameRoomReadyButton" onClick={props.onReadyGame}>Ready</button>
                </Col>
            </Fixed>
        </Layout>
    );
}
export default GameRoom;