import React from 'react';

import './timer.scss';

export const Clock = props => {
    const { timer } = props;
    return (
        <div>
            {/* Clock */}
            <p>{ timer.time }</p>

            {/* Play / Pause button */}
            <button onClick={ timer.handlePlayButtonClick }>
                { timer.playButtonText }
            </button>&nbsp;

            {/* Reset button */}
            <button onClick={ timer.handleResetButtonClick }>
                { timer.resetButtonText }
            </button>
        </div>
    );
}
