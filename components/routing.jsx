
import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './signUp.jsx';
import Login from './login.jsx';
import VideoPlayer from './player.jsx';
import Load from './load.jsx';
import Game from './game.jsx';
import Front from './front.jsx';


class Routing extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.stat = {

    };
  }

  render() {
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
          <Route exact path="/" component={Front} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route path="/login" render={() => <Login assingRoom={assignRoom} />} /> */}
          <Route
            path="/login"
            render={this.props.assignRoom => <Login {...props} />}
          />
          {/* <Route exact path="/login" component={Login} assignRoom={this.assignRoom} /> */}
          <Route exact path="/trivia" component={Load} />
          <Route exact path="/video" component={VideoPlayer} />
          <Route exact path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}
export default Routing;
