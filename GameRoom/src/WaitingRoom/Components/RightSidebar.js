import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { Layout, Fixed, Flex } from 'react-layout-pane';
import ListPlayer from './ListPlayer';
import PendingGame from './PendingGameRoom';
import '../StyleSheets/RightSidebar.css';

class RightSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerListHeight: 0,
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
    updateHeights() {
        this.setState({
            playerListHeight: ((window.innerHeight) * 0.35) + 'px',
        });
    }
    render() {
        return (
            <Layout type="column">
                <Fixed className="header center-content lobbyContainer" style={{ minHeight: this.state.playerListHeight, maxHeight: this.state.playerListHeight }}>
                    <Col className="edgeless center-content name-container lobbyHeader" xs={12} sm={12} md={12} lg={12}>
                        Players in Lobby
                </Col>
                    <Col className="edgeless center-content name-container scrollable" xs={12} sm={12} md={12} lg={12}>
                        {this.props.ChatPlayers && this.props.ChatPlayers.map((player) => (
                            <ListPlayer key={'player' + player.Id} xs={12} sm={12} md={12} lg={12} playerName={player.DisplayName} />
                        ))}
                    </Col>
                </Fixed>
                <Flex className="content center-content pendingGamesContainer">
                    <Col className="edgeless center-content name-container pendingGamesHeader" xs={12} sm={12} md={12} lg={12}>
                        <Col className="edgeless center-content" xs={9} sm={9} md={9} lg={9}>
                            Available Games
                    </Col>
                        <Col className="edgeless center-content" xs={3} sm={3} md={3} lg={3}>
                            <button className="createGameButton" onClick={()=>{ this.props.ShowCreateGameModal(true) }}>Create</button>
                        </Col>
                    </Col>
                    <Col className="edgeless center-content name-container scrollable" xs={12} sm={12} md={12} lg={12}>
                        {this.props.PendingGames && this.props.PendingGames.map((game) => (<PendingGame key={'game'+game.Id} Game={game} />))}
                    </Col>
                </Flex>
            </Layout>
        );
    }
}
export default RightSidebar;