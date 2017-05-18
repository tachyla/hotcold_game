import React from 'react';

export default function TopBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <h3 className="what" href="#" onClick={(e=> console.log('hello'))}>
                        What?
                    </h3>
                </li>
                <li>
                    <h3 className="new" href="#" onClick={(e=>props.newGameClick(e))}>
                        + New Game
                    </h3>
                </li>
            </ul>
        </nav>
    );
}