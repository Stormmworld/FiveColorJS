import React, { Component } from 'react';
import '../StyleSheets/Mana.css';

const Mana = (props) => {
    let imageUrl = '';
    switch (props.color) {
        case 'U':
            imageUrl = 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/9/9f/U.svg';
            break;
        case 'G':
            imageUrl = 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/88/G.svg';
            break;
        case 'B':
            imageUrl = 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/2/2f/B.svg';
            break;
        case 'R':
            imageUrl = 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/87/R.svg';
            break;
        case 'W':
            imageUrl = 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/8e/W.svg';
            break;
        case 'C':
            imageUrl = 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/1/1a/C.svg';
            break;
        default:
            return null;
    }
    return (
        <img className='mana-object'
            alt={props.color}
            src={imageUrl}
        />
    );
}

export default Mana;

