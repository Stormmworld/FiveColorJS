import React, { Component } from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import { Col } from 'react-bootstrap'
import ListPlayer from './ListPlayer';
import CreateGameModal from './CreateGameModal';
import PendingGame from './PendingGame';
import Mana from './Mana';
import '../StyleSheets/WaitingRoom.css';


class WaitingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            ChatroomHeight: 0,
            MessageWindowHeight: 0,
            RightControlsHeight: 0,
            RightListHeight: 0,
            showCreateGameModal: false
        }
    };
    componentWillMount() {
        this.updateHeights();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeights.bind(this));
    }

    inputKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.sendMessage(this.state.message);
            this.setState({ message: '' })
        }
    }
    closeCreateGame() {
        this.setState({ showCreateGameModal: false });
    }

    onCreateGame(name, format, playerCount, baseHitpoints) {
        this.props.CreateGame(name, format, playerCount, baseHitpoints);
        this.closeCreateGame();
    }

    updateHeights() {
        this.setState({
            ChatroomHeight: ((window.innerHeight) - 40) + 'px',
            MessageWindowHeight: ((window.innerHeight - 20) - 100) + 'px',
            RightControlsHeight: (((window.innerHeight - 20) / 2) - 15) + 'px',
            RightListHeight: (((window.innerHeight - 20) / 2) - 30) + 'px',
        });
    }

    render() {
        return (
            <Layout type="column">
                <Fixed className="header">
                    <Col className="edgeless center-content name-container chatHeader" xs={12} sm={12} md={12} lg={12}>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='B' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='W' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='R' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='U' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='G' /></Col>
                        <Col className="edgeless center-content " xs={2} sm={2} md={2} lg={2}>Five Color Lobby</Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='B' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='W' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='R' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='U' /></Col>
                        <Col className="edgeless center-content " xs={1} sm={1} md={1} lg={1}><Mana color='G' /></Col>
                    </Col>
                </Fixed>
                <Flex className="content">
                    <Layout type="row">
                        <Flex className="content messageWindowContainer">
                            <Layout type="column">
                                <Fixed className="header">
                                    <Col xs={12} sm={12} md={12} lg={12} className="chatHeader center-content">
                                        Signed in as {this.props.PlayerName}
                                    </Col>
                                </Fixed>
                                <Flex className="content scrollable">
                                    {this.props.ChatMessages.map((message, index) => (
                                        <span style={{ display: 'block' }} key={index}> ({message.Time}) {message.Name} : {message.Message} </span>
                                    ))}
                                </Flex>
                                <Fixed className="footer"><input
                                    className="chatMessagebox"
                                    type="text"
                                    value={this.state.message}
                                    onChange={e => this.setState({ message: e.target.value })}
                                    onKeyUp={this.inputKeyUp.bind(this)}
                                />
                                    <button className="chatSubmitButton" onClick={() => { this.props.sendMessage(this.state.message); this.setState({ message: '' }) }}>Send</button>
                                </Fixed>
                            </Layout>
                        </Flex>
                        <Fixed className="sidebar waitingRoomSidebar ">
                            <Col className="edgeless center-content lobbyContainer" style={{ minHeight: this.state.RightControlsHeight, maxHeight: this.state.RightControlsHeight }} xs={12} sm={12} md={12} lg={12}>
                                <Col className="edgeless center-content name-container lobbyHeader" xs={12} sm={12} md={12} lg={12}>Players in Lobby</Col>
                                <Col className="edgeless center-content name-container scrollable" style={{ minHeight: this.state.RightListHeight, maxHeight: this.state.RightListHeight }} xs={12} sm={12} md={12} lg={12}>
                                    {this.props.ChatPlayers.map((player) => (
                                        <ListPlayer xs={12} sm={12} md={12} lg={12} playerName={player} />
                                    ))}
                                </Col>
                            </Col>
                            <Col className="edgeless center-content name-container pendingGamesContainer" style={{ minHeight: this.state.RightControlsHeight, maxHeight: this.state.RightControlsHeight }} xs={12} sm={12} md={12} lg={12}>
                                <Col className="edgeless center-content name-container pendingGamesHeader" xs={12} sm={12} md={12} lg={12}>
                                    <Col className="edgeless center-content" xs={9} sm={9} md={9} lg={9}>Available Games</Col>
                                    <Col className="edgeless center-content" xs={3} sm={3} md={3} lg={3}>
                                        <button className="createGameButton" onClick={() => { this.setState({ showCreateGameModal: true }); }}>Create</button>
                                    </Col>
                                </Col>
                                <Col className="edgeless center-content name-container scrollable" style={{ minHeight: this.state.RightListHeight, maxHeight: this.state.RightListHeight }} xs={12} sm={12} md={12} lg={12}>
                                    {this.props.pendingGames.map((game) => (
                                        <PendingGame xs={12} sm={12} md={12} lg={12}
                                            Game={game}
                                            onJoinGame={this.props.onJoinGame}
                                            onStartGame={this.props.onStartGame}
                                            onLeaveGame={this.props.onLeaveGame} />
                                    ))}
                                </Col>
                            </Col>
                        </Fixed>
                    </Layout>
                </Flex>
                <CreateGameModal show={this.state.showCreateGameModal} onCreateGame={this.onCreateGame.bind(this)} createGameClosed={this.closeCreateGame.bind(this)} />
            </Layout >
        );
    }
}

export default WaitingRoom;