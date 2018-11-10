/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import Filters from './filters.jsx';
import Team from './teamTable.jsx';
import Game from './game.jsx';

class Load extends Component {
  // change this component to user add name and
  // conditional templates for if someone in room
  // first person to join can add category, other players only join
  // other players see selected category and difficulty
  constructor(props) {
    super(props);
    this.state = {
      // current player to be gotten from socket id
      currentPlayer: 1,
      diff: 'medium',
      category: 9,
      trivia: false,
      team1: '',
      team2: '',
      team3: '',
    };
    console.log(props)
    this.begin = this.begin.bind(this);
    this.handeleClick = this.handeleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  begin() {
    const {
      diff, category, team1, team2, team3, currentPlayer,
    } = this.state;
    sessionStorage.setItem('diff', diff);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('team1', team1);
    sessionStorage.setItem('team2', team2);
    sessionStorage.setItem('team3', team3);
    sessionStorage.setItem('score1', 0);
    sessionStorage.setItem('score2', 0);
    sessionStorage.setItem('score3', 0);
    // may not need to set this if reading from socket id in Game component
    sessionStorage.setItem('currentPlayer', currentPlayer);
    this.setState({ trivia: true });
  }

  handeleClick() {
    console.log('category selected');
    this.setState({
      [event.target.name]: event.target.id,
    });
  }

  handleChange() {
    const { socket } = this.props;
    this.setState({
      [event.target.name]: event.target.value,
    });
    socket.emit('login', event.target.value);
  }

  render() {
    const {
      category, diff, team1, team2, team3, trivia, currentPlayer,
    } = this.state;
    if (!trivia) {
      return (
        <center>
          <div>
            <div key="team">
              <Team handleChange={this.handleChange} currentPlayer={currentPlayer} />
            </div>
            <Filters click={this.handeleClick} />
            <table style={{
              alignItems: 'center', width: '400px', display: 'flex', justifyContent: 'center',
            }}
            >
              <thead>
                <tr style={{ cellpadding: 8, cellspacing: 8 }}>
                  <td><button type="button" name="diff" id="easy" onClick={this.handeleClick}><h5>Easy</h5></button></td>
                  <td><button type="button" name="diff" id="medium" onClick={this.handeleClick}><h5>Medium</h5></button></td>
                  <td><button type="button" name="diff" id="hard" onClick={this.handeleClick}><h5>Hard</h5></button></td>
                </tr>
              </thead>
            </table>
            <div key="begin">
              <button type="button" onClick={this.begin}><h5>Begin Game</h5></button>
            </div>
          </div>
        </center>

      );
    }
    return (
      <div>
        
        <Game category={category} diff={diff} name1={team1} name2={team2} socket={this.props.socket} />
      </div>
    );
  }
}
export default Load;
