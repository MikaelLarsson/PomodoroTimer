import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.setTime()
        };
    }
    setTime() {
        const time = new Date();
        time.setHours(0);
        time.setMinutes(25);
        time.setSeconds(0);
        return time;
    }
    componentDidMount() {
        this.pomodoro = setInterval(this.countDown, 1000);
    }
    countDown = () => {
        const time = this.state.time;
        if (!this.counterIsFinished(time)) {
            time.setSeconds(time.getSeconds() -1);
            this.setState({ time });
        } else {
            this.resetTime();
            clearInterval(this.pomodoro);
        }
    }
    counterIsFinished = time => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        if (seconds === 0 && minutes === 0 && hours === 0) {
            return true;
        }
    }
    resetTime = () => {
        const time = this.setTime();
        this.setState({ time });
    }
    render() {
        const time = this.state.time;
        const clock = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        return (
            <p>{ clock }</p>
        );
    }
}

export default Timer;