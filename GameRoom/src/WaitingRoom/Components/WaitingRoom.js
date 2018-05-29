import React, { Component } from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import Chat from '../../Chat/Components/Chat';
import PendingGameRoom from './PendingGameRoom';
import RightSidebarContainer from './RightSidebar';
import CreateGameModal from '../Containers/CreateGameModalContainer';
import WaitingRoomHeader from './WaitingRoomHeader';
import '../../StyleSheets/WaitingRoom.css';

class WaitingRoom extends Component {
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
                        <Flex className="content">
                            <Layout type="column">
                                <Flex className="content messageWindowContainer">
                                    <Chat />
                                </Flex>
                                {this.props.MyGame && this.props.MyGame.Id &&
                                    <Fixed className="footer waitingRoomGameRoom" >
                                        <PendingGameRoom />
                                    </Fixed>}
                            </Layout>
                        </Flex>
                        <Fixed className="sidebar waitingRoomSidebar ">
                            <RightSidebar />
                        </Fixed>
                    </Layout>
                </Flex>
                <Fixed className="footer waitingRoomFooter" />
                <CreateGameModal show={this.state.showCreateGameModal} />
            </Layout >
        );
    }
}

export default WaitingRoom;