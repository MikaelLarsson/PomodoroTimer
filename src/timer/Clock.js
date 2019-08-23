/**
 * @todo Reset the arcs position on load and on reset
 */

import React from 'react';

import './timer.scss';

export const Clock = props => {
    const { timer } = props;
    const radius = mapNumber(timer.seconds, 24, 0, 0, 360);
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

const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#FFF"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const mapNumber = (number, in_min, in_max, out_min, out_max) => ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

const describeArc = (x, y, radius, startAngle, endAngle) => {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');
    return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;   
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}
