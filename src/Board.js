import React from 'react';
import SimpleCard from './SimpleCard.js'
import {readString} from 'react-papaparse'
import CardList from './CardList.csv'

export class SimpleHandBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            cardData: []
        }
    }

    componentDidMount() {
        fetch(CardList)
            .then(response => response.text())
            .then(
                (result) => {
                    this.setState({
                        loaded: true,
                        cardData: readString(result, {header:true}).data
                    });
                },
                (error) => {
                    this.setState({
                        loaded: true,
                        error: error
                    });
                }
            )
    }

    renderSimpleCard(cardID,name,description) {
        return <SimpleCard json= {this.state.cardData[cardID]}/>;
    }
    onClick(id, input) {
        // let input = cardData[id].Collector_Number;
        this.props.moves.clickCard(id, parseInt(input));
    }

    render(props) {
        const {error, loaded, cardData } = this.state;
        const hand = this.props.G.hand;

        let winner = '';
        if (this.props.ctx.gameover) {
            winner =
                this.props.ctx.gameover.winner !== undefined ? (
                <div id="winner">You Win!</div>
                    ) : (
                <div id="winner">Draw!</div>
            );
        }

        const cardHand = [];
        for(let i = 0; i < hand.length; i++)
        {
            cardHand.push(
                <div key={i} style={{marginRight:"10px", marginLeft:"10px"}}onClick={() => this.onClick(i, cardData[hand[i]].Result)} >
                    {this.renderSimpleCard(hand[i])}
                </div>
                );
        }
        
        console.log(cardHand)

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!loaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div id="SimpleHandBoard">
                    <header id = "Title" style = {{textAlign: "center", marginRight: '300px'}}>
                        <h1>
                            Count to 21!
                        </h1>
                        <h3>    
                            Total: {this.props.G.total}
                        </h3>
                    </header>
                    <span id = "NavBar">
                        <button style= {{textAlign: "center", marginRight: '300px'}}>Test 1</button>
                    </span>
                    {cardData.map(cardData =>
                        <div>
                            <div>{cardData.Name}</div>
                            <div>{cardData.Description}</div>
                        </div>
                    )}
                    <div id = "Hand" style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: "center", marginRight: '300px'}}> 
                        {cardHand}
                    </div>
                    {winner}                             
                </div>
            )
        } 
    }
}
  
