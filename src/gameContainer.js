import InputBox from './inputBox';
import ResultBox from './resultBox';
import PreviousGuessesBox from './previousGuessesBox';
import React from 'react';


export default function gameContainer(){
    return(
        <div className ='placeHolderClass'>
            <ResultBox />
            <InputBox />
            <PreviousGuessesBox />
        </div>
    )
}