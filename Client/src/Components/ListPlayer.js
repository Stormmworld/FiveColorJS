import React from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/ListPlayer.css';

const ListPlayer = (props) => {
    return (
        <Col className="edgeless listPlayer" xs={12} sm={12} md={12} lg={12}>
            {props.playerName}
        </Col>
    );
}
export default ListPlayer;