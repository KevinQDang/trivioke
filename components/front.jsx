
import React from 'react';
import io from 'socket.io-client';
import SignUp from './signUp.jsx';
import Login from './login.jsx';
import SocketContext from './socket-context.jsx';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.socket = io('localhost:8080');
    // this.assignRoom = this.assignRoom.bind(this);
  }

  render(props) {
    return (

      <div>

        <SignUp />
        <SocketContext.Consumer socket={this.socket}>
          {socket => <Login {...props} socket={this.socket} />}
        </SocketContext.Consumer>
      </div>

    );
  }
}
export default Front;
