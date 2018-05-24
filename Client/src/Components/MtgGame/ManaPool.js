import React from 'react';
import { Col } from 'react-bootstrap'
import '../../StyleSheets/ManaPool.css';
import Mana from './Mana.js'

const ManaPool = function (props) {
    var redManaCount = 0;
    var whiteManaCount = 0;
    var blueManaCount = 0;
    var blackManaCount = 0;
    var greenManaCount = 0;
    var colorlessManaCount = 0;

    if (props.pool && props.pool.length > 0)
        for (var i = 0; i < props.pool.length; i++) {
            switch (props.pool[i]) {
                case 'R':
                    redManaCount++;
                    break;
                case 'W':
                    whiteManaCount++;
                    break;
                case 'U':
                    blueManaCount++;
                    break;
                case 'B':
                    blackManaCount++;
                    break;
                case 'G':
                    greenManaCount++;
                    break;
                default:
                    colorlessManaCount++;
                    break;
            }
        }

    return (
        <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
            <Col className="edgeless center-content manapool-header" xs={12} sm={12} md={12} lg={12}>Mana Pool</Col>
            <Col className="edgeless mana-white" xs={6} sm={6} md={6} lg={6}>
                <Mana color='W' />({whiteManaCount})
                </Col>
            <Col className="edgeless mana-black" xs={6} sm={6} md={6} lg={6}>
                <Mana color='B' />({blackManaCount})
                </Col>
            <Col className="edgeless mana-red" xs={6} sm={6} md={6} lg={6}>
                <Mana color='R' />({redManaCount})
                </Col>
            <Col className="edgeless mana-blue" xs={6} sm={6} md={6} lg={6}>
                <Mana color='U' />({blueManaCount})
                </Col>
            <Col className="edgeless mana-green" xs={6} sm={6} md={6} lg={6}>
                <Mana color='G' />({greenManaCount})
                </Col>
            <Col className="edgeless mana-colorless" xs={6} sm={6} md={6} lg={6}>
                <Mana color='C' />({colorlessManaCount})
                </Col>
        </Col>
    );
}
export default ManaPool;