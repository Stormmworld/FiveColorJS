import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import ModalComponent from './ModalComponent.js'
import '../StyleSheets/CreateGameModal.css';

class CreateGameModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Format: '',
            Name: '',
            PlayerCount:0,
        }
    };

    onCreateGameClicked(){
        this.props.onCreateGame(this.state.Name, this.state.Format, this.state.PlayerCount);
    }

    formatSelectionChanged(){
        var element = document.getElementById("formatSelector");
        this.setState({Format: element.options[element.selectedIndex].text});
    }

    validateNumericKeyPress(e){  
            event.preventDefault();
    }

    render() {
        return (
            <ModalComponent show={this.props.show} title='New Game Settings' handleClose={this.props.createGameClosed.bind(this)} handleButton={this.onCreateGameClicked.bind(this)} buttonText='Create Game'>
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
                    <select id="formatSelector" onChange={()=>this.formatSelectionChanged.bind(this)}>
                        <option value="five-color">5-Color</option>
                        <option value="standard">Standard</option>
                        <option value="none">None</option>
                    </select>
                </Col>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Players:</label>
                    <input 
                        type="number" 
                        value={this.state.PlayerCount} 
                        onChange={e => this.setState({ PlayerCount: e.target.value })} 
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