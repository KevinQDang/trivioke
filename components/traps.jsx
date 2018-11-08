/* eslint-disable react/prop-types */
import React from 'react';

class Traps extends React.Component {
  // props needs functions for 3 traps!!
  // or just 3 new functions
  // traps must update state of game component
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { halfTime, reverseAnswers, changeDifficulty } = this.props;
    return (
      <div>
        <h4>Traps!</h4>
        <table style={{
          width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <thead>
            <tr style={{ border: 'none' }}>
              <td><button type="button" onClick={halfTime}> Half-time! </button></td>
              <td><button type="button" onClick={reverseAnswers}> Reverse Answers! </button></td>
              <td><button type="button" onClick={changeDifficulty}> Increase Difficulty! </button></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Traps;
