import React from 'react';
import { Col } from 'react-bootstrap'
import '../../StyleSheets/VitalStats.css';

const VitalStats = function (props) {
    return (
        <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
            <Col className="edgeless center-content name-container" xs={12} sm={12} md={12} lg={12}>
            {props.userName}
            </Col>
            <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                <Col className="edgeless left-Column" xs={4} sm={4} md={4} lg={4}>Deck:</Col>
                <Col className="edgeless right-Column" xs={8} sm={8} md={8} lg={8}>{props.deckName}</Col>
            </Col>
            <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                <Col className="edgeless left-Column" xs={4} sm={4} md={4} lg={4}>Life:</Col>
                <Col className="edgeless right-Column life-view" xs={8} sm={8} md={8} lg={8}>{props.lifeRemaining}</Col>
            </Col>
        </Col>
    );
}
export default VitalStats;