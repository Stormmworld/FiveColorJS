import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import ModalComponent from './ModalComponent.js'
import '../StyleSheets/CreateGameModal.css';

const CreateGameModal = () => {
    return (
        <ModalComponent show={this.props.show} title='New Game Settings' handleClose={this.props.createGameClosed.bind(this)} handleButton={this.props.CreateGame.bind(this)}>
            <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                <label>Name:</label>
                <input type="text" />
            </Col>
            <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                <label>Format:</label>
                <select>
                    <option value="five-color">5-Color</option>
                    <option value="standard">Standard</option>
                    <option value="none">None</option>
                </select>
            </Col>
            <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                <label>Players:</label><input type="text" />
            </Col>
            <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                <button onClick={() => props.onCreateGame()} >Create Game</button>
            </Col>
        </ModalComponent>
    );
}

export default CreateGameModal;

// Game Name
// Selected Format
// Player Count