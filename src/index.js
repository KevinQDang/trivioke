/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Routing from '../components/routing.jsx';
import './index.css';

const socket = io('localhost:8080');

class App extends Component {
  constructor() {
    super();
    this.state = {
      socket,
    };
  }

  render() {
    return (
      <Routing socket={this.state.socket} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('index'));
