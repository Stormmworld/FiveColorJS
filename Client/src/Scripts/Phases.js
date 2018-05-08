import * as cardfunctions from '../Scripts/Card.js'

export function GetNextPhaseData(phase, subphase, landsPlayedThisTurn) {
    var retVal = {
        Phase: phase,
        Subphase: subphase,
        LandsPlayedThisTurn: landsPlayedThisTurn
    }
    switch (phase) {
        case 'beginning':
            switch (subphase) {
                case 'untap':
                    retVal.Subphase = 'upkeep';
                    break;
                case 'upkeep':
                    retVal.Subphase = 'draw';
                    break;
                case 'draw':
                    retVal.Phase = 'main1';
                    retVal.Subphase = null;
                    break;
            }
            break;
        case 'main1':
            retVal.Phase = 'combat';
            retVal.Subphase = 'attack-declaration';
            break;
        case 'combat':
            switch (subphase) {
                case 'attack-declaration':
                    retVal.Subphase = 'defense-declaration';
                    break;
                case 'defense-declaration':
                    retVal.Subphase = 'damage-resolution';
                    break;
                case 'damage-resolution':
                    retVal.Phase = 'main2';
                    retVal.Subphase = null;
                    break;
            }
            break;
        case 'main2':
            retVal.Phase = 'discard';
            break;
        case 'discard':
            retVal.Phase = 'ending';
            break;
        case 'ending':
            retVal.Phase = 'opponents-turn';
            break;
        case 'opponents-turn':
            retVal.Phase = 'beginning';
            retVal.Subphase = 'untap';
            retVal.LandsPlayedThisTurn = 0;
            break;
    }
    return retVal;
}

export function ActiveCards(hand,phase,stackActive){
    for(var i = 0; i < hand.length;i++){
        hand[i].enabled = ((phase === 'main' && !stackActive) || cardfunctions.CheckCardType(hand[i],'Instant') || cardfunctions.CheckCardType(hand[i],'Interrupt'));
    }
    return hand;
}