import React from 'react';
import { SVGCircle } from './svg-circle';

import './timer.scss';

export const Clock = props => {
    const { timer, radius } = props;
    return (
        <div>
            {/* Clock */}
            <div className="time">
                <SVGCircle radius={radius} />
                <p>{ timer.time }</p>
            </div>

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
