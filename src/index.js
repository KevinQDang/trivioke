/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Routing from '../components/routing.jsx';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.socket = io('localhost:8080');
  }

  render() {
    return (
      <Routing assignRoom={this.assignRoom} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('index'));
