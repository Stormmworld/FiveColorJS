import React from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/ListPlayer.css';

const ListPlayer = (props) => {
    return (
        <Col className="listPlayer" xs={12} sm={12} md={12} lg={12}>
            <Col className={(props.ActiveGame ? 'listPlayerActiveGameContainer' : (props.ReadyGame ? 'listPlayerReadyGameContainer' : (props.IsGamePending ? 'listPlayerPendingGameContainer':'')))} xs={3} sm={3} md={3} lg={3} />
            <Col xs={9} sm={9} md={9} lg={9}> {props.playerName} </Col>
        </Col>
    );
}
export default ListPlayer;