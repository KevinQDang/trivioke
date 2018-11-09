/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';


class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      redirect: false,
      name: '',
      pw: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.room = 'game';
    console.log(props);
  }


  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    this.props.socket.emit('login', 'A user logged in');
    this.props.socket.emit('room', this.room);
    const loginInfo = this.state;
    axios({ method: 'get', url: 'http://localhost:8080', params: loginInfo })
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { redirect } = this.state;
    if (!redirect) {
      return (
        <div style={{
          display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '35vh',
        }}
        >
          <div>
            <p><strong>Login</strong></p>
            Username:
            <input type="text" name="name" onChange={this.handleChange} />
            Password:
            <input type="text" name="pw" autoComplete="off" onChange={this.handleChange} />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Redirect to="/trivia" />
      </div>
    );
  }
}
export default Login;
