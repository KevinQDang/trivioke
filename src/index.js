/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import Routing from '../components/routing.jsx';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.assignRoom.bind(this);
    this.state = {

    };
    this.socket = io('localhost:8080');
  }

  assignRoom() {
    this.socket.emit('login', 'A user logged in');
    this.socket.emit('room', this.room);
  }

  render() {
    return (
      <Routing assignRoom={this.assignRoom} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('index'));
