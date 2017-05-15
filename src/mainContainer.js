import React from 'react';
import GameContainer from './gameContainer';


export default function gameContainer(){
    return(
        <div className ='mainDiv'>
            <h3>What?</h3>
            <h1>HOT or COLD</h1>
            <h3>+NEW GAME</h3>
            <div class ='gameDiv'>
            <GameContainer />
            </div>
        </div>
    )
}