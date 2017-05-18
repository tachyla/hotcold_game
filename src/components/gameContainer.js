import InputBox from './inputBox';
import ResultBox from './resultBox';
import PreviousGuessesBox from './previousGuessesBox';
import React from 'react';
import TopBar from './topBar';


export default class gameContainer extends React.Component{
  
    constructor(props){
        super(props);
        this.submitGuess = this.submitGuess.bind(this);
        this.newGame = this.newGame.bind(this);
        this.state={
            currentGuess: 0,
            secretNum: 0,
            pastGuesses: [],
            response:'Click New Game!',
            guessNum: 1
        };
    }

    newGame(e){
        e.preventDefault();
        let answer = Math.floor(Math.random()*100);
        let newState = {
            currentGuess: 0,
            secretNum: answer,
            pastGuesses: [],
            response:'Enter Your Guess!',
            guessNum: 1
        };
        this.setState(newState);
    }

    selectResponse(newGuess){
        let newResponse;

        // switch(this.state.secretNum){
        // case 0:
        //     return newResponse = 'Click New Game!';
        // case newGuess:
        //     return newResponse = 'Correct!';
        // case this.state.currentGuess === newGuess

        // default: break;
        // }


        if(this.state.secretNum === 0){
            newResponse = 'Click New Game!';
        } else if(this.state.secretNum === newGuess){
            newResponse = 'Correct!';
        } else if (this.state.currentGuess === newGuess || this.state.pastGuesses.includes(newGuess)){
            newResponse = 'Alredy guessed this number!';
        } else if (((this.state.secretNum - newGuess) >= 21) || ((this.state.secretNum - newGuess) <= -21)) {
            newResponse = 'Freezing';
        }else if (((this.state.secretNum - newGuess) > 20) || ((this.state.secretNum - newGuess) < -20)) {
            newResponse = 'Cold';
        } else if (((this.state.secretNum - newGuess) <= 5) && ((this.state.secretNum - newGuess) >= -5)){
            newResponse = 'Boiling!';
        } else if (((this.state.secretNum - newGuess) <= 10) && ((this.state.secretNum - newGuess) >= -10)){
            newResponse = 'Hot!';
        } else if (((this.state.secretNum - newGuess) <= 20) && ((this.state.secretNum - newGuess) >= -20)){
            newResponse = 'Warm';
        } 
        return newResponse;
    }
    // componentDidMount(){
    //     let answer = Math.floor(Math.random()*100);
    //     this.setState({secretNum: answer});
    // }

    // newGame(){
    //     let newState = this.props.newGameState;
    //     this.setState(newState);
    // }



    submitGuess(guess){
        let newGuess = parseInt(guess);
        let pastGuesses = [...this.state.pastGuesses, newGuess];
        let newResponse = this.selectResponse(newGuess);
        let newGuessNum = this.state.guessNum;
        newGuessNum++;
        this.setState({
            currentGuess: newGuess,
            pastGuesses: pastGuesses,
            response: newResponse,
            guessNum: newGuessNum
        });
    }

    render(){

        return(
            <section className='mainContainer'>
                <TopBar newGameClick={this.newGame} />
                <div className ='gameContainer'>
                    <ResultBox response={this.state.response} />
                    <InputBox guessNum={this.state.guessNum} sendGuess={this.submitGuess} />
                    <PreviousGuessesBox pastGuesses={this.state.pastGuesses}/>
                </div>
        </section>
        );
    }
}