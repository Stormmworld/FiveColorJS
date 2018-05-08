export function CheckCardType(card, type) {
    return card.Types.find(o => o === type);
}

export function DrawCards(drawCount, hand, deck) {
    for (var i = 0; i < drawCount; i++) {
        var cardDrawn = deck[0];
        hand.push(cardDrawn);
        deck.splice(0, 1);
    }
    return ({
        Deck: deck,
        Hand: hand,
    });
}
export function shuffleDeck(deck, shuffleCount) {
    var shuffledCards = [];
    var loopCount = deck.length;
    for (var i = 0; i < loopCount; i++) {
        var index = Math.floor(Math.random() * deck.length);
        var card = deck[index];
        deck.splice(index, 1);
        shuffledCards.push(card);
    }
    return shuffleCount === 0 ? shuffledCards : shuffleDeck(shuffledCards, shuffleCount - 1);
}
export function TapCard(cards, card) {
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].Id === card.Id) {
            cards[i].tapped = true;
            break;
        }
    }
    return cards;
}
export function UntapCards(cardData) {
    for (var i = 0; i < cardData.BattleFieldCards.length; i++) {
        cardData.BattleFieldCards[i].tapped = false;
    }
    for (var i = 0; i < cardData.LandCards.length; i++) {
        cardData.LandCards[i].tapped = false;
    }
    return cardData;
}