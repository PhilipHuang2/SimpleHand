import logo from './logo.svg';
import './App.css';

import { Client } from 'boardgame.io/react';
import { SimpleHand } from './Game';
import { SimpleHandBoard} from './Board'

const App = Client({ 
    game: SimpleHand,
    board: SimpleHandBoard,
});

export default App;