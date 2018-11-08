/* eslint-disable react/prop-types */
import React from 'react';

class Traps extends React.Component {
  // props needs functions for 3 traps!!
  // or just 3 new functions
  // traps must update state of game component
  constructor(props) {
    super(props);
    this.state = {
      hideTrap: false,
      hideTrap1: false,
      hideTrap2: false,
    };
  }

  toggle() {
    this.setState({
      hideTrap: true,
    });
  }

  toggle1() {
    this.setState({
      hideTrap1: true,
    });
  }

  toggle2() {
    this.setState({
      hideTrap2: true,
    });
  }

  render() {
    const { halfTime, reverseAnswers, changeDifficulty } = this.props;
    const { hideTrap, hideTrap1, hideTrap2 } = this.state;
    const used = hideTrap ? { display: 'none' } : {};
    const used1 = hideTrap1 ? { display: 'none' } : {};
    const used2 = hideTrap2 ? { display: 'none' } : {};
    return (
      <div>
        <h4>Traps!</h4>
        <table style={{
          width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <thead>
            <tr style={{ border: 'none' }}>
              <td><button type="button" style={used} onClick={() => { halfTime(); this.toggle(); }}> Half-time! </button></td>
              <td><button type="button" style={used1} onClick={() => { reverseAnswers(); this.toggle1(); }}> Reverse Answers! </button></td>
              <td><button type="button" style={used2} onClick={() => { changeDifficulty(); this.toggle2(); }}> Increase Difficulty! </button></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Traps;
