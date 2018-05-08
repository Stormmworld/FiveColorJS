import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Card from './Card.js'
import '../StyleSheets/BattleField.css';

class BattleField extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    getArtifacts() {
        var artifacts = [];
        if (this.props.cards)
            for (var i = 0; i < this.props.cards.length; i++) {
                if (this.props.cards[i].Types.find(o => o === 'Artifact') && !(this.props.cards[i].Types.find(o => o === 'Creature')))
                    artifacts.push(this.props.cards[i]);
            }
        return (
            <Col className='battlefield-artifacts' xs={4} sm={4} md={4} lg={4}>
                {artifacts.map(card => <Card card={card} cardClicked={this.props.cardClicked} />)}
            </Col>
        );
    }
    getEnchantments() {
        var enchantments = [];
        if (this.props.cards)
            for (var i = 0; i < this.props.cards.length; i++) {
                if (this.props.cards[i].Types.find(o => o === 'Enchantment') && !(this.props.cards[i].Types.find(o => o === 'Creature')))
                    enchantments.push(this.props.cards[i]);
            }
        return (
            <Col className='battlefield-enchantments' xs={4} sm={4} md={4} lg={4}>
                {enchantments.map(card => <Card card={card} cardClicked={this.props.cardClicked} />)}
            </Col>
        );
    }
    getCreatures() {
        var creatures = [];
        if (this.props.cards)
            for (var i = 0; i < this.props.cards.length; i++) {
                if (this.props.cards[i].Types.find(o => o === 'Creature'))
                    creatures.push(this.props.cards[i]);
            }
        return (
            <Col className='battlefield-creatures' xs={4} sm={4} md={4} lg={4}>
                {creatures.map(card => <Card card={card} cardClicked={this.props.cardClicked} />)}
            </Col>
        );
    }

    render() {
        return (
            <Col xs={12} sm={12} md={12} lg={12}>
                {this.getArtifacts()}
                {this.getEnchantments()}
                {this.getCreatures()}
            </Col>
        );
    }
}

export default BattleField;