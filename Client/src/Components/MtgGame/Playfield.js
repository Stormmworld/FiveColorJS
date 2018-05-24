import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../../StyleSheets/Playfield.css';
import Battlefield from './BattleField.js'
import Library from './Library.js'
import Graveyard from './Graveyard.js'
import Lands from './Lands.js'
import Hand from './Hand.js'
import Phases from './Phases.js'
import Stack from './Stack.js'
import ManaPool from './ManaPool.js'
import VitalStats from './VitalStats.js'
import ManaSelectionModal from './ManaSelectionModal.js'
import DiscardModal from './DiscardModal.js'

class Playfield extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BattleFieldHeight: '0px',
            SidebarHeight: '0px',
            DrawCount: 1,
            deck: [],
            showtopCard: false,
            hand: [],
            lands: [],
            graveYard: [],
            phase: 'beginning',
            subphase: 'untap',
            landsPlayedThisTurn: 0,
            landsPerTurn: 1,
            manaPool: [],
            battleFieldCards: [],
            deckName: this.props.deckName,
            currentPlayer: {
                Name: 'test user',
                Life: 20
            },
            stack: [],
            showManaSelectionModal: false,
            manaSelectionCard: null
        }
    };

    //Component Event Handlers
    componentWillMount() {
        this.updateHeights();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillReceiveProps(nextProps) {
        // if (this.props.deck.length < 1) {
        //     var cardData = cardfunctions.DrawCards(7, [], cardfunctions.shuffleDeck(nextProps.deck.Cards, 3))
        //     this.setState(
        //         {
        //             deckName: nextProps.deck.Name,
        //             deck: cardData.Deck,
        //             hand: cardData.Hand,
        //         }
        //     )
        // }
    }

    //Event Handlers
    battleFieldCardClicked(card) {
        // if (card.ManaProduction)
        //     this.ManaGenerated(card);
        // this.setState({ battleFieldCards: cardfunctions.TapCard(this.state.battleFieldCards, card) });
    }
    CardClickedFromHand(card) {
        // var currentHand = this.state.hand;
        // var landsPlayedThisTurn = this.state.landsPlayedThisTurn;
        // var currentLands = this.state.lands;
        // var currentStack = this.state.stack;
        // var cardIndex = currentHand.findIndex(o => o.Name === card.Name);
        // if (cardfunctions.CheckCardType(card, 'Land')) {
        //     if (this.state.landsPlayedThisTurn < this.state.landsPerTurn) {
        //         //alert(cardIndex);
        //         landsPlayedThisTurn++;
        //         currentHand.splice(cardIndex, 1);
        //         currentLands.push(card);
        //     }
        //     else
        //         alert('You can only play ' + this.state.landsPerTurn + ' lands per turn.');
        // }
        // else {
        //     if (manapoolfunctions.manaPoolSupportsCastingCost(card.ManaCost,this.state.manaPool)) {
        //         currentHand.splice(cardIndex, 1);
        //         currentStack.push(card);

        //     }
        // }

        // this.setState({
        //     hand: currentHand,
        //     lands: currentLands,
        //     landsPlayedThisTurn: landsPlayedThisTurn,
        //     stack: currentStack
        // });
    }
    Death() {
        // alert('Game Over, you lose');
    }
    discardSelected(hand, discard){
        // var currentGraveyard = this.state.graveYard;
        // currentGraveyard.push(discard);
        // this.setState({
        //     hand: hand,
        //     graveYard: currentGraveyard,
        //     showDiscardModal:false,
        // });
    }
    ManaGenerated(manaProducer) {
        // var currentManaPool = this.state.manaPool;
        // if (manaProducer.ManaProduction.length === 1) {
        //     for (var i = 0; i < manaProducer.ManaProduction[0].Quantity; i++)
        //         currentManaPool.push(manaProducer.ManaProduction[0].ManaType);
        //     this.setState({
        //         manaPool: currentManaPool
        //     });
        // }
        // else if (manaProducer.ManaProduction.length > 1) {
        //     this.setState({
        //         manaSelectionCard: manaProducer,
        //         showManaSelectionModal: true,
        //     });
        // }
    }
    manaSelectionclosed(manaselected, card) {
        // var currentManapool = this.state.manaPool;
        // var currentBattlefield = this.state.battleFieldCards;
        // var currentLands = this.state.lands;
        // if (manaselected) {
        //     for (var i = 0; i < manaselected.Quantity; i++)
        //         currentManapool.push(manaselected.ManaType);
        //     if (cardfunctions.CheckCardType(card, 'Land'))
        //         currentLands = cardfunctions.TapCard(currentLands, card);
        //     else
        //         currentBattlefield = cardfunctions.TapCard(currentBattlefield, card);
        // }
        // this.setState({
        //     showManaSelectionModal: false,
        //     manaPool: currentManapool
        // });
    }
    resolveStack() {
        // var resolution = stackfunctions.ResolveStack(this.state.stack, this.state.battleFieldCards, this.state.graveYard);
        // this.setState({
        //     stack: resolution.Stack,
        //     battleFieldCards: resolution.BattleField,
        //     graveYard: resolution.Graveyard
        // });
    }
    StepCompleted() {
        // var currentdeck = this.state.deck;
        // var currenthand = this.state.hand;
        // var phaseData = phasefunctions.GetNextPhaseData(this.state.phase, this.state.subphase, this.state.landsPlayedThisTurn);
        // var activateDiscardModal = (phaseData.Phase === 'discard');
        // var cardData = {
        //     BattleFieldCards: this.state.battleFieldCards,
        //     LandCards: this.state.lands,
        // }


        // if (phaseData.Subphase === 'untap')
        //     cardData = cardfunctions.UntapCards(cardData);
        // if (phaseData.Subphase === 'draw') {
        //     var data = cardfunctions.DrawCards(this.state.DrawCount, currenthand, currentdeck);
        //     currenthand = data.Hand;
        //     currentdeck = data.Deck;
        // }

        // this.setState({
        //     phase: phaseData.Phase,
        //     subphase: phaseData.Subphase,
        //     landsPlayedThisTurn: phaseData.LandsPlayedThisTurn,
        //     battleFieldCards: cardData.BattleFieldCards,
        //     lands: cardData.LandCards,
        //     hand:currenthand,
        //     deck:currentdeck,
        //     showDiscardModal: activateDiscardModal,
        // });
    }
    updateHeights() {
        this.setState({
            BattleFieldHeight: (window.innerHeight - 326) + 'px',
            SidebarHeight: (window.innerHeight - 183) + 'px'
        });
    }

    render() {
        return (
            <Col className="edgeless grid">
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-active-player edgeless" xs={3} sm={3} md={3} lg={3}>
                        Active Player
                    </Col>
                    <Col className="edgeless" xs={9} sm={9} md={9} lg={9}><Phases phase={this.state.phase} subphase={this.state.subphase} stepComplete={this.StepCompleted.bind(this)} /></Col>

                </Col>
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-stack edgeless" xs={1} sm={1} md={1} lg={1} style={{ minHeight: this.state.SidebarHeight, maxHeight: this.state.SidebarHeight }}>
                        <Stack cards={this.state.stack} resolveStack={this.resolveStack.bind(this)} />
                    </Col>
                    <Col className="edgeless" xs={10} sm={10} md={10} lg={10}>
                        <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                            <Col className="container-library-graveyard edgeless" xs={2} sm={2} md={2} lg={2}>
                                <Col className="edgeless" xs={6} sm={6} md={6} lg={6} >
                                    <Library cards={this.state.deck} showTopCard={this.state.showtopCard} />
                                </Col>
                                <Col className="edgeless" xs={6} sm={6} md={6} lg={6} >
                                    <Graveyard cards={this.state.graveYard} />
                                </Col>
                            </Col>
                            <Col className="container-lands edgeless" xs={10} sm={10} md={10} lg={10}>
                                <Lands lands={this.state.lands} addMana={this.ManaGenerated.bind(this)} />
                            </Col>
                        </Col>
                        <Col className="container-battlefield edgeless" style={{ minHeight: this.state.BattleFieldHeight, maxHeight: this.state.BattleFieldHeight }} xs={12} sm={12} md={12} lg={12}>
                            <Battlefield className="col-sm-12 no-padding no-margin" cards={this.state.battleFieldCards} cardClicked={this.battleFieldCardClicked.bind(this)} />
                        </Col>
                    </Col>
                    <Col className="container-exile edgeless" xs={1} sm={1} md={1} lg={1} style={{ minHeight: this.state.SidebarHeight, maxHeight: this.state.SidebarHeight }}>Exile</Col>
                </Col>
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-manapool edgeless" xs={1} sm={1} md={1} lg={1}>
                        <ManaPool pool={this.state.manaPool} />
                    </Col>
                    <Col className="container-hand edgeless" xs={10} sm={10} md={10} lg={10}>
                        <Hand hand={this.state.hand} phase={this.state.phase} subphase={this.state.subphase} stackActive={(this.state.stack.length > 0)} cardClicked={this.CardClickedFromHand.bind(this)} />
                    </Col>
                    <Col className="container-life edgeless" xs={1} sm={1} md={1} lg={1}>
                        <VitalStats lifeRemaining={this.state.currentPlayer.Life} deckName={this.state.deckName} userName={this.state.currentPlayer.Name} />
                    </Col>
                </Col>
                <ManaSelectionModal show={this.state.showManaSelectionModal} card={this.state.manaSelectionCard} manaSelectionclosed={this.manaSelectionclosed.bind(this)} />
                <DiscardModal show={this.state.showDiscardModal} hand={this.state.hand} maxHandSize={this.state.maxHandSize} discardSelected={this.discardSelected.bind(this)}/>
            </Col>
        );
    }
}

export default Playfield;

