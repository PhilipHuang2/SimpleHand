function isVictory(total) {
    return total === 21;
}

function isDraw(total) {
    return total >= 21;
}

export const SimpleHand = {
    setup: () => ({
        total: 0,
        hand: Array(7).fill().map((item, index) => 1 + index),        
    }),

    turn: {
        moveLimit: 1,
    },

    moves:{
        clickCard: (G,ctx, id) => {
            G.total += G.hand[id];
        },
    },

    endIf: (G,ctx) => {
        if(isVictory(G.total)) {
            return {winner: ctx.currentPlayer};
        }
        if(isDraw(G.total)) {
            return {draw: true};
        }
    }

    
};