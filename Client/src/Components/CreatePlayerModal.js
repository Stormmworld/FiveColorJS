import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import ModalComponent from './ModalComponent.js'
import '../StyleSheets/CreatePlayerModal.css';

class CreatePlayerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Format: 'none',
            DisplayName: props.displayName,
            FirstName: '',
            LastName: '',
        }
    };

    componentWillReceiveProps(nextProps){
        if(this.state.DisplayName !== nextProps.displayName)
            this.setState({DisplayName: nextProps.displayName});
    }

    onCreatePlayerClicked() {
        this.props.onCreatePlayer(this.state.DisplayName, this.state.FirstName, this.state.LastName);
    }

    render() {
        return (
            <ModalComponent show={this.props.show} title='New Player' handleClose={this.props.onCreatePlayerClosed.bind(this)} handleButton={this.onCreatePlayerClicked.bind(this)} buttonText='Create Player'>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Display Name:</label>
                    <input
                        type="text"
                        value={this.state.DisplayName}
                        onChange={e => this.setState({ DisplayName: e.target.value })}
                    />
                </Col>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={this.state.FirstName}
                        onChange={e => this.setState({ FirstName: e.target.value })}
                    />
                </Col>
                <Col className="edgeless " xs={12} sm={12} md={12} lg={12}>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={this.state.LastName}
                        onChange={e => this.setState({ LastName: e.target.value })}
                    />
                </Col>
            </ModalComponent>
        );
    }
}

export default CreatePlayerModal;