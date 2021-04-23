import React from 'react';
import SimpleCard from './SimpleCard.js'

export class SimpleHandBoard extends React.Component {
    renderSimpleCard(name,description) {
        return <SimpleCard name={name} description = {description} />;
    }
    onClick(id) {
        this.props.moves.clickCard(id);
        
    }

    render(G)
    {
        const cardHand = [];
        for(let i = 0; i < this.props.G.hand.length; i++)
        {
            cardHand.push(
                <div onClick={() => this.onClick(i)} >
                    {this.renderSimpleCard(this.props.G.hand[i], "This button adds " + this.props.G.hand[i] + " to the total." )}
                </div>
                );
        }

        let winner = '';
        if (this.props.ctx.gameover) {
            winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }


        return (
            <div style = {{textAlign: "center", marginRight: '300px'}}>
                <p>{this.props.G.total}</p>
                
                <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {cardHand}
                </div>
                {winner}
                
            </div>
            
        );
    }
    
}