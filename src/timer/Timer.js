import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    render() {
        const { hours, minutes, seconds } = this.state;
        const time = `${hours}:${minutes}:${seconds}`;
        return (
            <p>{ time }</p>
        );
    }
}

export default Timer;