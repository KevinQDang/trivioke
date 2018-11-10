
import React from 'react';
import io from 'socket.io-client';
import SignUp from './signUp.jsx';
import Login from './login.jsx';


class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.socket = io('localhost:8080');
  }

  render() {
    return (

      <div>

        <SignUp />
        <Login socket={this.props.socket} />
      </div>

    );
  }
}
export default Front;
