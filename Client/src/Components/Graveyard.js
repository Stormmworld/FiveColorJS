import React from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/Graveyard.css';

const Graveyard = (props) => {
    let graveYardImage = 'url(https://media.istockphoto.com/vectors/blank-tombstone-vector-id472277479)';
    if (props.cards && props.cards.length > 0)
        graveYardImage = 'url(' + props.cards[props.cards.length - 1].image + ')';

    return (
        <Col className="edgeless card-size graveyard-image" style={{ 'background-image': graveYardImage }} xs={12} sm={12} md={12} lg={12}>
            <span>({props.cards ? props.cards.length : '0'}) Cards</span>
        </Col>
    );
}
export default Graveyard;