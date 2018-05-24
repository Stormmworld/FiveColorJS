import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import ModalComponent from '../ModalComponent.js'
import '../../StyleSheets/DiscardModal.css';
import Card from './Card.js';

class DiscardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.hand,
            discardingCards: []
        }
    };

    componentWillReceiveProps(nextprops){
        this.setState({
            cards: nextprops.hand,
            discardingCards: [],
        });
    }

    cardClicked(card, isDiscard) {
        var currentHand = this.state.cards;
        var currentDiscard = this.state.discardingCards;

        if (isDiscard)
            for (var i = 0; i < currentHand.length; i++) {
                if (currentHand[i].id === card.id) {
                    card.fadeout = true;
                    currentDiscard.push(card);
                    currentHand.splice(i, 1);
                    break;
                }
            }
        else
            for (var i = 0; i < currentDiscard.length; i++) {
                if (currentDiscard[i].id === card.id) {
                    card.fadeout = false;
                    currentHand.push(card);
                    currentDiscard.splice(i, 1);
                    break;
                }
            }

        this.setState({
            cards: currentHand,
            discardingCards: currentDiscard,
        });
    }
    discardModalClosed() {
        var handsize = this.state.cards.length;

        if (handsize < this.props.maxHandsize) {
            alert('too many cards selected');
        }
        else if (handsize > this.props.maxHandsize) {
            alert('not enough card selected');
        }
        else {
            this.props.discardSelected(this.state.cards, this.state.discardingCards);
        }
    }

    render() {
        if (!this.props.show)
            return null;
        return (
            <ModalComponent show={this.props.show} title='Select the cards to discard' handleButton={this.discardModalClosed.bind(this)} buttonText='Confirm'>
                <Col>{this.state.cards && this.state.cards.map(card => <Card card={card} cardClicked={this.cardClicked.bind(this,card,true)} />)} </Col>
                <Col>{this.state.discardingCards && this.state.discardingCards.map(card => <Card card={card} cardClicked={this.cardClicked.bind(this,card,false)} />)}</Col>
            </ModalComponent>
        );
    }
}

export default DiscardModal;