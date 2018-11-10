/* eslint-disable react/prop-types */
import React from 'react';

class Lifelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      showResult1: false,
      showResult2: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle() {
    this.setState({
      showResult: true,
    });
  }

  toggle1() {
    this.setState({
      showResult1: true,
    });
  }

  toggle2() {
    this.setState({
      showResult2: true,
    });
  }

  render() {
    const { handleClick, triviaRequest, changeCat } = this.props;
    const { showResult, showResult1, showResult2 } = this.state;
    const hide = showResult ? { display: 'none' } : {};
    const hide1 = showResult1 ? { display: 'none' } : {};
    const hide2 = showResult2 ? { display: 'none' } : {};
    return (
      <div>
        <h4>Lifelines</h4>
        <table style={{
          width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <thead>
            <tr style={{ border: 'none' }}>
              <td><button type="button" style={hide} onClick={() => { handleClick('used'); this.toggle(); }}>50/50</button></td>
              <td><button type="button" style={hide1} onClick={() => { triviaRequest('used'); this.toggle1(); }}>Change Question</button></td>
              <td><button type="button" style={hide2} onClick={() => { changeCat('used'); this.toggle2(); }}>Change Category</button></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Lifelines;
