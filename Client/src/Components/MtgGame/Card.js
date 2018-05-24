import React, { Component } from 'react';
import '../../StyleSheets/Card.css';

const Card = function (props) {
    return (
        <img alt='' className={(props.card.tapped ? "CardTapped" : ((props.card.fadeout || !props.card.enabled) ? "card-fade" : "Card")) + " card-size"} src={props.card.image} onClick={() => ((props.card.tapped || props.card.fadeout)? {} : props.cardClicked(props.card))} />
    );
}

export default Card;

