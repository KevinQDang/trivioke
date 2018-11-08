/* eslint-disable react/prop-types */
import React from 'react';

class Traps extends React.Component {
  // props needs functions for 3 traps!!
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
    const { trap1Func, trap2Func, trap3Func } = this.props;
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
              <td><button type="button" style={used} onClick={() => { trap1Func(); this.toggle() }}>Trap1</button></td>
              <td><button type="button" style={used1} onClick={() => { trap2Func(); this.toggle1() }}>Trap2</button></td>
              <td><button type="button" style={used2} onClick={() => { trap3Func(); this.toggle2() }}>Trap3</button></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Traps;
