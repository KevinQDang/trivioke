/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
import React from 'react';
import Lifelines from './lifelines.jsx';
import Trivia from './trivia.jsx';
import Timer from './timer.jsx';
import Traps from './traps.jsx';
import Scoreboard from './scoreBoard.jsx';
import VideoPlayer from './player.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleClickUsed: false,
      triviaRequestUsed: false,
      changeCatUsed: false,
      // traps must update state!
      time: 30,
      reverse: false,
      video: false,
      visibility: true,
      question: null,
      currTeam: 'team1',
      team1: 0,
      team2: 0,
      team3: 0,
    };
    this.triviaRequest = this.triviaRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextTeam = this.nextTeam.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
    this.triggerVideo = this.triggerVideo.bind(this);
    this.changeCat = this.changeCat.bind(this);
    this.halfTime = this.halfTime.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
    this.reverseAnswers = this.reverseAnswers.bind(this);
  }

  triviaRequest(used) {
    console.log(used, 'in triviaRequest');
    if (used) {
      this.setState({
        triviaRequestUsed: true,
      });
    }
    const url = `https://opentdb.com/api.php?amount=1&category=${sessionStorage.category}&difficulty=${sessionStorage.diff}&type=multiple`;
    fetch(url)
      .then(res => res.json())
      .then((data) => { console.log(data);
        this.setState({ question: data.results[0] }); })
      .catch((err) => { console.error(err); });
    
  }

  changeCat(used) {
    console.log(used, 'in changeCat');
    if (used) {
      this.setState({
        changeCatUsed: true,
      });
    }
    const cats = [9, 11, 14, 15, 17, 22, 23, 26, 27];
    const rand = cats[Math.floor(Math.random() * cats.length)];
    const url = `https://opentdb.com/api.php?amount=1&category=${rand}&difficulty=${sessionStorage.diff}&type=multiple`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ question: data.results[rand] });
        sessionStorage.setItem('category', rand);
      })
      .catch((err) => { console.error(err); });
  }

  nextTeam() {
    const { currTeam } = this.state;
    // return currTeam === 'team1' ? this.setState({ currTeam: 'team2' }) : this.setState({ currTeam: 'team1' });
    if (currTeam === 'team1') {
      this.setState({ currTeam: 'team2' });
    } else if (currTeam === 'team2') {
      this.setState({ currTeam: 'team3' });
    } else {
      this.setState({ currTeam: 'team1' });
    }
  }

  triggerVideo() {
    this.setState(prevState => ({ video: !prevState.video }));
  }

  increaseScore() {
    const { currTeam } = this.state;
    if (currTeam === 'team1') {
      sessionStorage.setItem('score1', (Number(sessionStorage.score1) + 1));
      this.setState(() => ({
        visibility: true,
      }));
    } else if (currTeam === 'team2') {
      sessionStorage.setItem('score2', (Number(sessionStorage.score2) + 1));
      this.setState(() => ({
        visibility: true,
      }));
    } else {
      sessionStorage.setItem('score3', (Number(sessionStorage.score3) + 1));
      this.setState(() => ({
        visibility: true,
      }));
    }
  }

  componentDidMount() {
    this.triviaRequest();
  }

  handleClick(used) {
    console.log(used, 'in the parent handleClick');
    if (used) {
      this.setState({
        handleClick: true,
      });
    }
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  halfTime() {
    const { time } = this.state;
    const newTime = time / 2;
    this.setState({ time: newTime });
    // resets state but doesn't rerender timer component
    console.log(time, newTime, this.state.time);
  }

  reverseAnswers() {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  }

  changeDifficulty() {
    const url = `https://opentdb.com/api.php?amount=1&category=${sessionStorage.category}&difficulty=hard&type=multiple`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ question: data.results[0] });
        sessionStorage.setItem('diff', 'hard');
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    // conditional render for only player whos current turn can see answers!
    const {
      question, visibility, currTeam, team1, team2, team3, video, reverse, time,
    } = this.state;
    const { name1, name2, name3 } = this.props;
    const player1 = currTeam === 'team1' ? {} : { display: 'none' };
    const player2 = currTeam === 'team2' ? {} : { display: 'none' };
    const player3 = currTeam === 'team3' ? {} : { display: 'none' };
    const player1Trap = currTeam !== 'team1' ? {} : { display: 'none' };
    const player2Trap = currTeam !== 'team2' ? {} : { display: 'none' };
    const player3Trap = currTeam !== 'team3' ? {} : { display: 'none' };
    if (!video) {
      return (
        <center>
          <div>
            <div style={player1} onChange={this.nextTeam}>
              <Lifelines
                handleChange={this.handleChange}
                triviaRequest={this.triviaRequest}
                handleClick={this.handleClick}
                changeCat={this.changeCat}
              />
              <div style={player1Trap} onChange={this.nextTeam}>
                <Traps
                  halfTime={this.halfTime}
                  reverseAnswers={this.reverseAnswers}
                  changeDifficulty={this.changeDifficulty}
                />
              </div>
              {'player1'}
            </div>
            <div style={player2} onChange={this.nextTeam}>
              <Lifelines
                handleChange={this.handleChange}
                triviaRequest={this.triviaRequest}
                handleClick={this.handleClick}
                changeCat={this.changeCat}
              />
              <div style={player2Trap} onChange={this.nextTeam}>
                <Traps
                  halfTime={this.halfTime}
                  reverseAnswers={this.reverseAnswers}
                  changeDifficulty={this.changeDifficulty}
                />
              </div>
              {'player2'}
            </div>
            <div style={player3} onChange={this.nextTeam}>
              <Lifelines
                handleChange={this.handleChange}
                triviaRequest={this.triviaRequest}
                handleClick={this.handleClick}
                changeCat={this.changeCat}
              />
              <div style={player3Trap} onChange={this.nextTeam}>
                <Traps
                  halfTime={this.halfTime}
                  reverseAnswers={this.reverseAnswers}
                  changeDifficulty={this.changeDifficulty}
                />
              </div>
              {'player3'}
            </div>
            
            <Timer
              startTimer={this.startTimer}
              trigger={this.triggerVideo}
              time={time}
            />
            <Trivia
            // order of answers in state of game component
            // logic of trivia component in game
            // OR add timer to trivia component!
              triviaRequest={this.triviaRequest}
              handleChange={this.handleChange}
              question={question}
              hidden={visibility}
              nextTeam={this.nextTeam}
              increaseScore={this.increaseScore}
              trigger={this.triggerVideo}
              reverse={reverse}
            />
            <Scoreboard
              currTeam={currTeam}
              team1={team1}
              team2={team2}
              team3={team3}
              name1={name1}
              name2={name2}
              name3={name3}
            />
          </div>
        </center>
      );
    }
    return (
      <VideoPlayer loser={currTeam} />
    );
  }
}
export default Game;
