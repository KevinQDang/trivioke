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
  }

  render() {
    return (    
      <Routing />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('index'));
