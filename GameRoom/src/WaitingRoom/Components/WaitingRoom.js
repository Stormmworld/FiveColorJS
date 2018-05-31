import React, { Component } from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import ChatRoom from '../../Chat/Containers/ChatRoomContainer';
import PendingGameRoom from './PendingGameRoom';
import RightSidebar from '../Containers/RightSidebarContainer';
import CreateGameModal from '../Containers/CreateGameModalContainer';
import WaitingRoomHeader from './WaitingRoomHeader';
import '../StyleSheets/WaitingRoom.css';

class WaitingRoom extends Component {

    onCreateGame(name, format, playerCount, baseHitpoints) {
        this.props.CreateGame(name, format, playerCount, baseHitpoints);
        this.closeCreateGame();
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
                                    <ChatRoom />
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
                <CreateGameModal />
            </Layout >
        );
    }
}

export default WaitingRoom;