import React from 'react';
import { Button, Col } from 'react-bootstrap'
import '../../StyleSheets/Stack.css';
import Card from './Card.js'

const Stack = (props) => {
    return (
        <Col className="edgeless stack-container">
            <Col className="edgeless resolve-stack-container" xs={12} sm={12} md={12} lg={12}>
                {props.cards.length>0 ? <Button onClick={props.resolveStack}>Resolve</Button>: null}
            </Col>
            <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                {props.cards.map(card => <Card card={card} cardClicked={() => { }} />)}
            </Col>
        </Col>
    );
}
export default Stack;