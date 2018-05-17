import React, { Component } from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import Chat from '../Chat/Chat';
import RightSidebar from './RightSidebar';
import CreateGameModal from './CreateGameModal';
import WaitingRoomHeader from './WaitingRoomHeader';
import '../../StyleSheets/WaitingRoom.css';


class WaitingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateGameModal: false
        }
    };

    closeCreateGame() {
        this.setState({ showCreateGameModal: false });
    }

    onCreateGame(name, format, playerCount, baseHitpoints) {
        this.props.CreateGame(name, format, playerCount, baseHitpoints);
        this.closeCreateGame();
    }

    onCreateGameClicked() {
        this.setState({ showCreateGameModal: true });
    }

    render() {
        return (
            <Layout type="column">
                <Fixed className="header">
                    <WaitingRoomHeader />
                </Fixed>
                <Flex className="content">
                    <Layout type="row">
                        <Flex className="content messageWindowContainer">
                            <Chat PlayerName={this.props.PlayerName} sendMessage ={this.props.sendMessage} ChatMessages={this.props.ChatMessages}/>
                        </Flex>
                        <Fixed className="sidebar waitingRoomSidebar ">
                            <RightSidebar onCreateGameClicked={this.onCreateGameClicked.bind(this)} pendingGames={this.props.PendingGames} chatPlayers={this.props.ChatPlayers} />
                        </Fixed>
                    </Layout>
                </Flex>
                <CreateGameModal show={this.state.showCreateGameModal} onCreateGame={this.onCreateGame.bind(this)} createGameClosed={this.closeCreateGame.bind(this)} />
            </Layout >
        );
    }
}

export default WaitingRoom;