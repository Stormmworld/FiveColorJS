
    export function manaPoolSupportsCastingCost(ManaCost, manaPool) {
        for (var i = 0; i < ManaCost.length; i++) {
            if (ManaCost[i] === "0") { return true; }
            var requiredMana = ManaCost[i].split(',');
            var manapool = manaPool;
            var success = true;
            for (var j = requiredMana.length - 1; j > -1; j--) {
                if (manapool.length === 0)
                    success = false;
                var indexOfMana = manapool.findIndex(o => o.color === requiredMana[j]);
                if (indexOfMana) {
                    manapool.splice(indexOfMana, 1);
                }
                else
                    success = false;
            }
            if (success)
                return true;
        }
        return false;
    }