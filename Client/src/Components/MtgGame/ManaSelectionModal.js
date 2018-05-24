import React, { Component } from 'react';
import ModalComponent from '../ModalComponent.js'
import '../../StyleSheets/Mana.css';
import ManaSelector from './ManaSelector'

class ManaSelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
        }
    };

    manaSelectionclosed(card){
        alert('no mana selected', card);
        this.props.manaSelectionclosed();
    }

    manaSelected(manaselected){
        this.props.manaSelectionclosed(manaselected, this.props.card);
    }

    render() {
        if(!this.props.show)
            return null;
        return (
                <ModalComponent show={this.props.show} title='Select the Mana To Produce' handleClose={this.manaSelectionclosed.bind(this)}>
                    {this.props.card && this.props.card.ManaProduction.map(manaProduced => <ManaSelector mana={manaProduced} selected={this.manaSelected.bind(this)} />)}
                </ModalComponent>
        );
    }
}

export default ManaSelectionModal;