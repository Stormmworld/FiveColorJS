import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../../StyleSheets/DeckBuilder.css';

class DeckBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Cards: [],
            Id: -1
        }
    };

    cardClicked(card) {
        let cards = this.State.Cards;
        for (var i = 0; i < cards.length; i++)
            if (cards[i].DeckId === card.DeckId) {
                cards[i].Enabled = !cards[i].Enabled;
                break;
            }
        this.setState({ Cards: cards });
    }

    DeckBuilderClosed() {
        if (this.props.onDeckBuilderClosed)
            this.props.onDeckBuilderClosed();
    }

    DeckBuilderSave() {
        if (this.props.onSaveDeck)
            this.props.onSaveDeck(
                {
                    Name: this.state.Name,
                    Cards: this.state.Cards,
                    Id: this.state.Id
                }
            );
    }

    render() {
        if (!this.props.show)
            return null;
        return (
            <Col className="" xs={12} sm={12} md={12} lg={12}>
                {this.state.Cards &&
                    this.state.Cards.map(card =>
                        <Card card={card}
                            cardClicked={this.cardClicked.bind(this, card)}
                        />)
                }
            </Col>
        );
    }
}

export default DeckBuilder;