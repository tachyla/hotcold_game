import React from 'react';

export default function resultBox(props) {
    return(
        <div className='results_box'>
            <span>{props.response}</span>
        </div>
    );
}