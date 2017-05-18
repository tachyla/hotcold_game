import React from 'react';
import GameContainer from './gameContainer';


export default class mainContainer extends React.Component{
    
    newGame(e){
        e.preventDefault();
        let answer = Math.floor(Math.random()*100);
        this.newState = {
            currentGuess: 0,
            secretNum: answer,
            pastGuesses: [],
            response:'Enter Your Guess!',
            guessNum: 1
        };
    }


    render(){
        console.log(this.newState);
        return(
        <div className ='mainDiv'>
            <h3>What?</h3>
            <h3 onClick={(e=> this.newGame(e))} >+NEW GAME</h3>
            <h1>HOT or COLD</h1>
            <GameContainer newGameState={this.newState}/>
        </div>
        );
    }
}