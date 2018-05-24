import React, { Component } from 'react';
import '../../StyleSheets/Mana.css';

class Mana extends Component {

    GetManaSymbol(color) {
        switch (color) {
            case 'U':
                return 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/9/9f/U.svg';
                break;
            case 'G':
                return 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/88/G.svg';
                break;
            case 'B':
                return 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/2/2f/B.svg';
                break;
            case 'R':
                return 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/87/R.svg';
                break;
            case 'W':
                return 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/8e/W.svg';
                break;
            case 'C':
                return 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/1/1a/C.svg';
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <img className='mana-object' alt={this.props.color} src={this.GetManaSymbol(this.props.color)}  height='25'/>
        );
    }
}

export default Mana;

