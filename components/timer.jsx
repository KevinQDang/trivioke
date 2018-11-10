/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // this function should trigger when timer component is mounted on page
  componentDidMount() {
    this.props.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.props.timer);
  }

  render() {
    return (
      <div>
        <h3>Time Left</h3>
        <span>{this.props.time} seconds!</span>
      </div>
    );
  }
}

export default Timer;
