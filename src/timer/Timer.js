import React from 'react';

const defaultState = {
    hours: 0,
    minutes: 25,
    seconds: 5
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }
    componentDidMount() {
        this.timerId = setInterval(this.countDown, 1000);
    }
    countDown = () => {
        if(this.state.seconds > 0) {
            const seconds = this.state.seconds - 1;
            this.setState({ seconds });
        } else {
            // clearInterval(this.timerId);
            this.setState(defaultState);
        }
    }
    render() {
        const { hours, minutes, seconds } = this.state;
        const clock = `${hours}:${minutes}:${seconds}`;
        return (
            <p>{ clock }</p>
        );
    }
}

export default Timer;