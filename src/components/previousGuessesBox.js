import React from 'react';

export default function previousGuessesBox(props) {
    let arr = props.pastGuesses.map((guess, index)=><span key={index}>{guess}</span>);
    return(
        <div className='prev_guesses'>
            {arr}
        </div>
    );
}