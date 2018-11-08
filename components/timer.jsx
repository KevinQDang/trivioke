/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
    };
    this.startTimer = (time) => {
      const timer = setInterval(() => {
        this.setState({ 'time': time });
        if (--time < 0) {
          clearInterval(timer);
          this.props.trigger();
        }
      }, 1000);
    };
  }

  // this function should trigger when timer component is mounted on page
  componentDidMount() {
    this.startTimer(this.state.time);
  }

  render() {
    return (
      <div>
        <h3>Time Left</h3>
        <span>{this.state.time} seconds!</span>
      </div>
    );
  }
}

export default Timer;
