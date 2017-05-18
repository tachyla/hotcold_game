import React from 'react';
import ReactDOM from 'react-dom';
// import InputBox from './inputBox';
// import ResultBox from './resultBox';
// import PreviousGuessesBox from './previousGuessesBox';
// import GameContainer from './gameContainer';
import GameContainer from './components/gameContainer';
import './index.css';

ReactDOM.render(
  <GameContainer />,
  // <InputBox />,
  document.getElementById('root')
);
