import React from 'react';

export const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path d={describeArc(200, 200, 150, 0, radius)}>
            <animate attributeName="stroke-dashoffset" dur="6s" to="0" />
        </path>
        {/* <path
            style={{
                stroke: '#fff',
                strokeDasharray: 820,
                strokeDashoffset: 820,
                strokeWidth: 10,
                fill: 'transparent'
            }}
            d="M150,150
                m0,-130
               a 130,130 0 0,1 0,260
               a 130,130 0 0,1 0,-260">
            <animate attributeName="stroke-dashoffset" dur="6s" to="0" />
        </path> */}
    </svg>
);

/**
 * 
 * @param {int} x Position X axis
 * @param {int} y Position Y axis
 * @param {int} radius How big will the circle be?
 * @param {int} startAngle
 * @param {int} endAngle
 */
const describeArc = (x, y, radius, startAngle, endAngle) => {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
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
