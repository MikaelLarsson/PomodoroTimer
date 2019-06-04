import React from 'react';
import { Clock } from './Clock';
import { CONSTS } from './consts';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerRunning: false,
            time: this.getStartTime(),
            isBreak: false,
            pomodoro: 1
        };
    }
    render() {
        const time = this.state.time;
        const clock = this.formatClock(time);
        const timer = {
            time: clock,
            handlePlayButtonClick: this.state.timerRunning ? this.pauseTimer : this.startTimer,
            playButtonText: this.state.timerRunning ? 'Pause' : 'Play',
            handleResetButtonClick: this.state.timerRunning ? this.handleReset : this.skipBreak,
            resetButtonText: this.state.isBreak ? 'Skip' : 'Reset'
        }
        return (
            <>
                <Clock timer={ timer } />
                
                {/* Bell sound */}
                { this.state.isBreak && <audio src="assets/bell.mp3" autoPlay /> }
            </>
        );
    }
    skipBreak = () => {
        this.pauseTimer();
        this.setState({ isBreak: false });
        this.initPomodoro();
    }
    formatClock(time) {
        return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    }
    getStartTime() {
        const time = new Date();
        time.setHours(CONSTS.POMODORO_TIMEBLOCK.HOURS);
        time.setMinutes(CONSTS.POMODORO_TIMEBLOCK.MINUTES);
        time.setSeconds(CONSTS.POMODORO_TIMEBLOCK.SECONDS);
        return time;
    }
    initPomodoro = () => {
        const pomodoro = this.state.pomodoro;
        this.setState({
            time: this.getStartTime(),
            isBreak: false,
            pomodoro: this.isTimerFinished && pomodoro < CONSTS.SET_LENGTH ? pomodoro + 1 : 1
        });
    }
    startTimer = () => {
        this.pomodoro = setInterval(this.timer, 1000);
        this.setState({ timerRunning: true });
    }
    pauseTimer = () => {
        clearInterval(this.pomodoro);
        this.setState({ timerRunning: false });
    }
    timer = () => {
        if (!this.isTimerFinished()) {
            const time = this.state.time;
            time.setSeconds(time.getSeconds() -1);
            this.setState({ time });
        } else {
            this.pauseTimer();
            if (this.state.isBreak) {
                this.initPomodoro();
            } else {
                this.initBreak();
            }
        }
    }
    resetTime = () => {
        const time = this.getStartTime();
        this.setState({
            time,
            isBreak: false
        });
    }
    handleReset = () => {
        this.pauseTimer();
        this.resetTime();
    }
    isTimerFinished = () => {
        const hours = this.state.time.getHours();
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();
        return seconds === 0 && minutes === 0 && hours === 0;
    }
    initBreak = () => {
        const time = new Date();
        if (this.state.pomodoro < CONSTS.SET_LENGTH) {
            time.setHours(CONSTS.BREAK_TIMEBLOCK.HOURS);
            time.setMinutes(CONSTS.BREAK_TIMEBLOCK.MINUTES);
            time.setSeconds(CONSTS.BREAK_TIMEBLOCK.SECONDS);
        } else {
            time.setHours(CONSTS.SET_BREAK_TIMEBLOCK.HOURS);
            time.setMinutes(CONSTS.SET_BREAK_TIMEBLOCK.MINUTES);
            time.setSeconds(CONSTS.SET_BREAK_TIMEBLOCK.SECONDS);
        }
        this.setState({ time, isBreak: true });
    }
}

export default Timer;