import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import ModalComponent from '../ModalComponent.js'
import '../../StyleSheets/CreateGameModal.css';

class CreateGameModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Format: 'none',
            Name: '',
            PlayerCount: 0,
            BaseHitpoints: 20
        }
    };

    onCloseCreateGameModal(){
        this.setState({
            Format: 'none',
            Name: '',
            PlayerCount: 0,
            BaseHitpoints: 20
        })
        this.props.showCreateGame(false);
    }

    onCreateGameClicked() {
        this.props.createGame({
            Name: this.state.Name,
            Format: this.state.Format,
            PlayerCount: this.state.PlayerCount,
            BaseHitpoints: this.state.BaseHitpoints
        });
        this.onCloseCreateGameModal();
    }

    formatSelectionChanged() {
        var element = document.getElementById("formatSelector");
        this.setState({ Format: element.options[element.selectedIndex].text });
    }

    handleFormatChanged(changeEvent) {
        this.setState({
            Format: changeEvent.target.value
        });
    }

    render() {
        return (
            <ModalComponent show={this.props.CreateGameVisible} title='New Game Settings' handleClose={this.onCloseCreateGameModal.bind(this)} buttonText='Create Game'>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={this.state.Name}
                        onChange={e => this.setState({ Name: e.target.value })}
                    />
                </Col>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Format:</label>
                    <label><input type="radio" value="5-color" checked={this.state.Format === '5-color'} onChange={this.handleFormatChanged.bind(this)} />5-color</label>
                    <label><input type="radio" value="standard" checked={this.state.Format === 'standard'} onChange={this.handleFormatChanged.bind(this)} />Standard</label>
                    <label><input type="radio" value="none" checked={this.state.Format === 'none'} onChange={this.handleFormatChanged.bind(this)} />None</label>
                </Col>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Players:</label>
                    <input
                        type="number"
                        value={this.state.PlayerCount}
                        onChange={e => this.setState({ PlayerCount: e.target.value })}
                    />
                </Col>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Starting Hitpoints:</label>
                    <input
                        type="number"
                        value={this.state.BaseHitpoints}
                        onChange={e => this.setState({ BaseHitpoints: e.target.value })}
                    />
                </Col>
            </ModalComponent>
        );
    }
}

export default CreateGameModal;

// Game Name
// Selected Format
// Player Count