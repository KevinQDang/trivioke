
import React from 'react';
import SignUp from './signUp.jsx';
import Login from './login.jsx';


class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
