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
    const { trap1Func, trap2Func, trap3Func } = this.props;
    return (
      <div>
        <h4>Traps!</h4>
        <table style={{
          width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <thead>
            <tr style={{ border: 'none' }}>
              <td><button type="button" onClick={trap1Func}> Trap1 </button></td>
              <td><button type="button" onClick={trap2Func}> Trap2 </button></td>
              <td><button type="button" onClick={trap3Func}> Trap3 </button></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Traps;
