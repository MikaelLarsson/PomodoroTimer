import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerRunning: false,
            time: this.setTime()
        };
    }
    setTime() {
        const time = new Date();
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(3);
        return time;
    }
    componentDidMount() {
        this.startTimer();
    }
    startTimer = () => {
        this.pomodoro = setInterval(this.timer, 1000);
        this.setState({ timerRunning: true });
    }
    timer = () => {
        if (!this.counterIsFinished()) {
            const time = this.state.time;
            time.setSeconds(time.getSeconds() -1);
            this.setState({ time });
        } else {
            this.resetTime();
            
        }
    }
    resetTime = () => {
        const time = this.setTime();
        this.setState({ time });
        this.pauseTimer();
    }
    pauseTimer = () => {
        clearInterval(this.pomodoro);
        this.setState({ timerRunning: false });
    }
    counterIsFinished = () => {
        const hours = this.state.time.getHours();
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();
        return seconds === 0 && minutes === 0 && hours === 0;
    }
    render() {
        const time = this.state.time;
        const clock = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        return (
            <div>
                <p>{ clock }</p>
                <button onClick={this.pauseTimer} disabled={!this.state.timerRunning}>Pause</button>&nbsp;
                <button onClick={this.startTimer} disabled={this.state.timerRunning}>Play</button>&nbsp;
                <button onClick={this.resetTime}>Reset</button>
            </div>
        );
    }
}

export default Timer;