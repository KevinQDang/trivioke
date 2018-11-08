/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
    };
    this.startTimer = (time, display) => {
      const timer = setInterval(() => {
        display.textContent = `${time} seconds!`;

        if (--time < 0) {
          clearInterval(timer);
          this.props.trigger();
        }
      }, 1000);
    };
  }
  // this function should trigger when timer component is mounted on page

  componentDidMount() {
    const display = this.refs.time;
    this.startTimer(this.state.time, display);
  }

  render() {
    return (
      <div>
        <h3>Time Left</h3>
        <span ref="time">30 seconds!</span>
      </div>
    );
  }
}

export default Timer;
