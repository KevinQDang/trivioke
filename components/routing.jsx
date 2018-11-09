
import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import io from 'socket.io-client';
import SignUp from './signUp.jsx';
import Login from './login.jsx';
import VideoPlayer from './player.jsx';
import Load from './load.jsx';
import Game from './game.jsx';
import Front from './front.jsx';


class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <div>
            <Link to="/">SignUp/Login</Link>
          </div>
          <center>
            <img
              src="/logo.png"
              alt="logo"
            />
          </center>
          <Route exact path="/" component={socket => <Front {...this.props} socket={this.props.socket} />} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={socket => <Login {...this.props} socket={this.props.socket} />} />
          <Route exact path="/trivia" component={socket => <Load {...this.props} socket={this.props.socket} />} />
          <Route exact path="/video" component={VideoPlayer} />
          <Route exact path="/game" component={socket => <Game {...this.props} socket={this.props.socket} />} />
        </div>
      </Router>
    );
  }
}
export default Routing;
