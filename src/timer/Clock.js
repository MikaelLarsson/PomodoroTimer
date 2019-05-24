import React from 'react';

export const Clock = props => {
    const { timer } = props;
    return (
        <div>
            {/* Clock */}
            <p>{ timer.time }</p>

            {/* Play / Pause button */}
            <button onClick={ timer.isRunning ? timer.pause : timer.start }>
                { timer.isRunning ? 'Pause' : 'Play'}
            </button>&nbsp;

            {/* Reset button */}
            { timer.isBreak ? 
                <button onClick={ timer.skipBreak }>Skip</button> : 
                <button onClick={ timer.reset }>Reset</button> }
        </div>
    );
}
