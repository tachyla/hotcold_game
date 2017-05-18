import React from 'react';

//this.props.sendGuess(e)

export default class inputBox extends React.Component {
    constructor(props){
        super(props);
    }

    submitGuess(e){
        e.preventDefault();
        let guess = this.guess.value;
        console.log(guess);
        this.props.sendGuess(guess);
        this.guessForm.reset();

    }
    render(){

        return(
        <div className='input_box' >
            <form ref={(input => this.guessForm = input)} className='guess-form' onSubmit={e =>this.submitGuess(e)}> 
            <input type='text' placeholder='Input Guess' ref={(input => this.guess=input)}/>
            <button type='submit'>Guess</button>            
            </form>
            <h2>Guess #{this.props.guessNum}</h2>
        </div>
        );
    }
}