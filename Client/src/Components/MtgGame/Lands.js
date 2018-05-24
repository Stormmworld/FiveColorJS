import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../../StyleSheets/Lands.css';
import Card from './Card.js'

const Lands = function(props){
    return (
            <Col xs={12} sm={12} md={12} lg={12}>
                {props.lands.map(card => <Card card={card} cardClicked={props.addMana} />)}
            </Col>
    );
}
export default Lands;