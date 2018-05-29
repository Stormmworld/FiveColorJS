import React, { Component } from 'react';
import '../../StyleSheets/Mana.css';

const Mana = (props) => {
    return (
        <img className='mana-object'
            alt={props.color}
            src={'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/9/9f/' + props.color + '.svg'}
        />
    );
}

export default Mana;

