/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: '',
      pw: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // routing() {
  //   <Router>
  //     <div>
  //       <Route exact path="/login" component={Login} />
  //       {/* <Route exact path="/trivia" component={Load} /> */}
  //       <Route exact path="/video" component={VideoPlayer} />
  //     </div>
  //   </Router>;
  // }

  // updateRoute() {
  //   return (
  //     <Router>
  //       <Route exact path="/login" render={() => this.state.redirect ? (
  //         <Redirect to="/trivia" /> ) : (
  //         <Redirect to="/login" /> )}/>
  //     </Router>
  //   );
  // }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    const loginInfo = this.state;
    axios({ method: 'get', url: 'http://localhost:8080/login', params: loginInfo })
      .then((response) => {
        // console.log('got back');
        this.setState({ redirect: true });
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { redirect } = this.state;
    if (!redirect) {
      return (
        <div>
          Login
          <div>
            <label>
                  Username:
              <input type="text" name="name" onChange={this.handleChange} />
              </label>
                <label>
                  Password:
                  <input type="text" name="pw" onChange={this.handleChange} />
                </label>
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
