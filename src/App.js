import logo from './logo.svg';
import './App.css';

import { Client } from 'boardgame.io/react';
import { SimpleHand } from './Game';
import { SimpleHandBoard} from './Board'

// class App extends React.Component{
//   renderSimpleCard(name,description) {
//     return <SimpleCard name={name} description = {description} />;
//   }

//   render(){
//     let group = [];
//     for(let i = 1; i <= 0; i++)
//     {
//       group.push(this.renderSimpleCard("This is number " + i, "This is the description"));
//     }
//     return(
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//               </a>
//               <div style={{display: 'flex', flexDirection: 'row'}}>
//                 {this.renderSimpleCard("This is the Title","This is the description.")}
//                 {this.renderSimpleCard("Second Card", "This is the second description.")}
//                 {this.renderSimpleCard("Third Card", "This is the third description.")}
//                 {this.renderSimpleCard("Fourth Card", "This is the fourth description.")}

//               </div>
//               <div style={{display: 'flex', flexDirection: 'row'}}>
//                 {group}
//               </div>
//             </header> 
//           </div>
//     );
//   }
// }

const App = Client({ game: SimpleHand,
                      board: SimpleHandBoard});


export default App;
