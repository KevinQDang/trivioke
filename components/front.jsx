import React from 'react';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  assignRoom() {
    socket.emit('room', this.room);
    console.log('submit');
  }

  render() {
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    );
  }
}
export default Front;