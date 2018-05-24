import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../../StyleSheets/ManaSelector.css';
import Mana from './Mana.js'

const ManaSelector = function (props) {
    var manaToShow = props.mana ? props.mana.ManaType.split(''): [];

    return (
        <Col className="selectable-mana" onClick={() => props.selected(props.mana)} xs={4} sm={4} md={4} lg={4}>
            {manaToShow.map(manaProduced => <Mana color={manaProduced}/> )}
        </Col>
    );
}
export default ManaSelector;