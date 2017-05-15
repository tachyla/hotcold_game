import React from 'react';
import GameContainer from './gameContainer';


export default function mainContainer(){
    return(
        <div className ='mainDiv'>
            <h3>What?</h3>
            <h3>+NEW GAME</h3>
            <h1>HOT or COLD</h1>
            <GameContainer />
        </div>
    )
}