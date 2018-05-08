import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/PlayfieldLayout.css';

class PlayfieldLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BattleFieldHeight:'0px',
            SidebarHeight:'0px'
        }
    }

    updateHeights(){
        this.setState({
            BattleFieldHeight: (window.innerHeight - 326) + 'px',
            SidebarHeight: (window.innerHeight - 183) + 'px'
        });
    }

    componentWillMount() {
        this.updateHeights();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeights.bind(this));
    }

    render() {
        return (
            <Col className="edgeless grid">
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-phase edgeless" xs={12} sm={12} md={12} lg={12}>Phases</Col>
                    <Col className="container-subphase edgeless" xs={12} sm={12} md={12} lg={12}>SubPhases</Col>
                </Col>
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-stack edgeless" xs={1} sm={1} md={1} lg={1} style={{ minHeight: this.state.SidebarHeight, maxHeight: this.state.SidebarHeight }}>Stack</Col>
                    <Col className="edgeless" xs={10} sm={10} md={10} lg={10}>
                        <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                            <Col className="container-library-graveyard edgeless" xs={3} sm={3} md={3} lg={3}>Library / GraveYard</Col>
                            <Col className="container-lands edgeless" xs={9} sm={9} md={9} lg={9}>Lands</Col>
                        </Col>
                        <Col className="container-battlefield edgeless" style={{ minHeight: this.state.BattleFieldHeight, maxHeight: this.state.BattleFieldHeight }} xs={12} sm={12} md={12} lg={12}>Battlefield</Col>
                    </Col>
                    <Col className="container-exile edgeless" xs={1} sm={1} md={1} lg={1} style={{ minHeight: this.state.SidebarHeight, maxHeight: this.state.SidebarHeight }}>Exile</Col>
                </Col>
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-manapool edgeless" xs={1} sm={1} md={1} lg={1}>pool</Col>
                    <Col className="container-hand edgeless" xs={10} sm={10} md={10} lg={10}>Hand</Col>
                    <Col className="container-life edgeless" xs={1} sm={1} md={1} lg={1}>Life Stats</Col>
                </Col>
            </Col>
        );
    }
}
export default PlayfieldLayout;