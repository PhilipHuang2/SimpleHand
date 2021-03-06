function isVictory(total) {
    return total === 21;
}

function isDraw(total) {
    return total >= 21;
}

export const SimpleHand = {
    setup: () => ({
        total: 0,
        // hand: Array(7).fill().map((item, index) => 1 + index),   
        hand: [0,1,2,0,1,2,0],     
    }),

    turn: {
        moveLimit: 1,
    },

    moves:{
        clickCard: (G,ctx, id,input) => {
            G.total = G.total + input;
            let newHand = G.hand.slice();
            newHand.splice(id,1);
            G.hand = newHand;
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