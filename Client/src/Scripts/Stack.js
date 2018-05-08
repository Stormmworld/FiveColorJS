export function ResolveStack(stack, battlefield, graveyard) {
    var retVal = {
        Stack: [],
        BattleField: battlefield,
        Graveyard: graveyard,
        Effects: []
    }
    for (var i = 0; i < stack.length; i++) {
        switch (stack[i].Types[0]) {
            case 'Artifact':
            case 'Creature':
            case 'Enchantment':
                retVal.BattleField.push(stack[i]);
                break;
            default:
                retVal.Graveyard.push(stack[i]);
                break;
        }
    }
    return retVal;
}