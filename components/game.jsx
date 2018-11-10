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
import GameOver from './gameOver.jsx';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      handleClickUsed: false,
      triviaRequestUsed: false,
      changeCatUsed: false,
      // traps must update state!
      time: 60,
      reverse: false,
      video: false,
      visibility: true,
      question: null,
      answers: null,
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
    this.startTimer = this.startTimer.bind(this);
  }

  triviaRequest(used) {
    
    if (used) {
      this.setState({
        triviaRequestUsed: true,
      });
    }
    const url = `https://opentdb.com/api.php?amount=1&category=${sessionStorage.category}&difficulty=${sessionStorage.diff}&type=multiple`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ question: data.results[0] });
        const shuffle = (answerArr) => {
          for (let i = answerArr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [answerArr[i], answerArr[j]] = [answerArr[j], answerArr[i]];
          }
          return answerArr;
        };
        const reverseStr = (str) => {
          let reversed = '';
          for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
          }
          return reversed;
        };
        function escapeHtml(text) {
          return text
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&ldquo;/g, '"')
            .replace(/&rdquo;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&lsquo;/g, "'")
            .replace(/&rsquo;/g, "'");
        }
        let answerArr;
        if (this.reverse) {
          answerArr = [
            <button key="c" type="button" onClick={() => { this.triviaRequest(); this.nextTeam(); this.increaseScore(); }}>{escapeHtml(reverseStr(data.results[0].correct_answer))}</button>,
            <button key="i1" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[0]))}</button>,
            <button key="i2" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[1]))}</button>,
            <button key="i3" onClick={this.triggerVideo} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[2]))}</button>,
          ];
        } else {
          answerArr = [
            <button key="c" type="button" onClick={() => { this.triviaRequest(); this.nextTeam(); this.increaseScore(); }}>{escapeHtml(data.results[0].correct_answer)}</button>,
            <button key="i1" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(data.results[0].incorrect_answers[0])}</button>,
            <button key="i2" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(data.results[0].incorrect_answers[1])}</button>,
            <button key="i3" onClick={this.triggerVideo} type="button">{escapeHtml(data.results[0].incorrect_answers[2])}</button>,
          ];
        }
        const shuffled = shuffle(answerArr);
        this.setState({ answers: shuffled });
      })
      .catch((err) => { console.error(err); });
  }

  changeCat(used) {

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
        sessionStorage.setItem('category', rand);

        this.setState({ question: data.results[0] });
        const shuffle = (answerArr) => {
          for (let i = answerArr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [answerArr[i], answerArr[j]] = [answerArr[j], answerArr[i]];
          }
          return answerArr;
        };
        const reverseStr = (str) => {
          let reversed = '';
          for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
          }
          return reversed;
        };
        function escapeHtml(text) {
          return text
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&ldquo;/g, '"')
            .replace(/&rdquo;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&lsquo;/g, "'")
            .replace(/&rsquo;/g, "'");
        }
        let answerArr;
        if (this.reverse) {
          answerArr = [
            <button key="c" type="button" onClick={() => { this.triviaRequest(); this.nextTeam(); this.increaseScore(); }}>{escapeHtml(reverseStr(data.results[0].correct_answer))}</button>,
            <button key="i1" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[0]))}</button>,
            <button key="i2" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[1]))}</button>,
            <button key="i3" onClick={this.triggerVideo} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[2]))}</button>,
          ];
        } else {
          answerArr = [
            <button key="c" type="button" onClick={() => { this.triviaRequest(); this.nextTeam(); this.increaseScore(); }}>{escapeHtml(data.results[0].correct_answer)}</button>,
            <button key="i1" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(data.results[0].incorrect_answers[0])}</button>,
            <button key="i2" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(data.results[0].incorrect_answers[1])}</button>,
            <button key="i3" onClick={this.triggerVideo} type="button">{escapeHtml(data.results[0].incorrect_answers[2])}</button>,
          ];
        }
        const shuffled = shuffle(answerArr);
        this.setState({ answers: shuffled });
      })
      .catch((err) => { console.error(err); });
  }

  nextTeam() {
    const { currTeam } = this.state;
    const { socket } = this.props;
    console.log(socket);
    socket.emit('player', id);
    console.log(id);
    if (currTeam === 'team1') {
      this.setState({ currTeam: 'team2' });
    } else if (currTeam === 'team2') {
      this.setState({ currTeam: 'team3' });
    } else {
      this.setState({ currTeam: 'team1' });
    }
    this.triviaRequest();
    this.setState({ time: 60 });
  }

  triggerVideo() {
    this.setState(prevState => ({ video: !prevState.video }));
    this.setState({ time: 60 });
  }

  increaseScore() {
    const { currTeam } = this.state;
    if (currTeam === 'Team 1') {
      sessionStorage.setItem('score1', (Number(sessionStorage.score1) + 1));
      if (Number(sessionStorage.score1) === 10) {
        // if score is 10, player wins!!!

      }
      this.setState(() => ({
        visibility: true,
      }));
    } else if (currTeam === 'team2') {
      sessionStorage.setItem('score2', (Number(sessionStorage.score2) + 1));
      if (Number(sessionStorage.score2) === 10) {
        // if score is 10, player wins!!!
      }
      this.setState(() => ({
        visibility: true,
      }));
    } else {
      sessionStorage.setItem('score3', (Number(sessionStorage.score3) + 1));
      if (Number(sessionStorage.score3) === 10) {
        // if score is 10, player wins!!!
      }
      this.setState(() => ({
        visibility: true,
      }));
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      const { time } = this.state;
      this.setState({ time: time - 1 });
      if (time - 1 < 0) {
        clearInterval(this.timer);
        this.triggerVideo();
      }
    }, 1000);
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
    const newTime = Math.floor(time / 2);
    this.setState({ time: newTime });

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
        sessionStorage.setItem('diff', 'hard');

        this.setState({ question: data.results[0] });
        const shuffle = (answerArr) => {
          for (let i = answerArr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [answerArr[i], answerArr[j]] = [answerArr[j], answerArr[i]];
          }
          return answerArr;
        };
        const reverseStr = (str) => {
          let reversed = '';
          for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
          }
          return reversed;
        };
        function escapeHtml(text) {
          return text
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&ldquo;/g, '"')
            .replace(/&rdquo;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&lsquo;/g, "'")
            .replace(/&rsquo;/g, "'");
        }
        let answerArr;
        if (this.reverse) {
          answerArr = [
            <button key="c" type="button" onClick={() => { this.triviaRequest(); this.nextTeam(); this.increaseScore(); }}>{escapeHtml(reverseStr(data.results[0].correct_answer))}</button>,
            <button key="i1" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[0]))}</button>,
            <button key="i2" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[1]))}</button>,
            <button key="i3" onClick={this.triggerVideo} type="button">{escapeHtml(reverseStr(data.results[0].incorrect_answers[2]))}</button>,
          ];
        } else {
          answerArr = [
            <button key="c" type="button" onClick={() => { this.triviaRequest(); this.nextTeam(); this.increaseScore(); }}>{escapeHtml(data.results[0].correct_answer)}</button>,
            <button key="i1" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(data.results[0].incorrect_answers[0])}</button>,
            <button key="i2" onClick={this.triggerVideo} style={{ display: !this.visibility ? 'block' : 'none' }} type="button">{escapeHtml(data.results[0].incorrect_answers[1])}</button>,
            <button key="i3" onClick={this.triggerVideo} type="button">{escapeHtml(data.results[0].incorrect_answers[2])}</button>,
          ];
        }
        const shuffled = shuffle(answerArr);
        this.setState({ answers: shuffled });
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    const {
      question, currTeam, team1, team2, team3, video, answers, time, winner,
    } = this.state;
    const {
      name1, name2, name3,
    } = this.props;
    const player1 = currTeam === 'team1' ? {} : { display: 'none' };
    const player2 = currTeam === 'team2' ? {} : { display: 'none' };
    const player3 = currTeam === 'team3' ? {} : { display: 'none' };
    if (winner) {
      return (
        <GameOver winner={winner} />
      );
    }
    if (!video) {
      return (
        <center>
          <div>
            <button onClick={() => { console.log(this.props.socket); }}>hello</button>
            <div style={player1} onChange={this.nextTeam}>
              <Lifelines
                handleChange={this.handleChange}
                triviaRequest={this.triviaRequest}
                handleClick={this.handleClick}
                changeCat={this.changeCat}
                socket={this.props.socket}
              />
              <Traps
                  halfTime={this.halfTime}
                  reverseAnswers={this.reverseAnswers}
                  changeDifficulty={this.changeDifficulty}
                />


              {'player1'}
            </div>
            <div style={player2} onChange={this.nextTeam}>
              <Lifelines
                handleChange={this.handleChange}
                triviaRequest={this.triviaRequest}
                handleClick={this.handleClick}
                changeCat={this.changeCat}
              />

              <Traps
                  halfTime={this.halfTime}
                  reverseAnswers={this.reverseAnswers}
                  changeDifficulty={this.changeDifficulty}
                />

              {'player2'}
            </div>
            <div style={player3} onChange={this.nextTeam}>
              <Lifelines
                handleChange={this.handleChange}
                triviaRequest={this.triviaRequest}
                handleClick={this.handleClick}
                changeCat={this.changeCat}
              />
              
                <Traps
                  halfTime={this.halfTime}
                  reverseAnswers={this.reverseAnswers}
                  changeDifficulty={this.changeDifficulty}
                />
             
              {'player3'}
            </div>

            <Timer
              startTimer={this.startTimer}
              timer={this.timer}
              time={time}
            />
            <Trivia
            // order of answers in state of game component
            // logic of trivia component in game
              triviaRequest={this.triviaRequest}
              handleChange={this.handleChange}
              question={question}
              answers={answers}
              nextTeam={this.nextTeam}
              increaseScore={this.increaseScore}
              trigger={this.triggerVideo}
              socket={this.props.socket}
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
      <VideoPlayer
        loser={currTeam}
        nextTeam={this.nextTeam}
        triggerVideo={this.triggerVideo}
      />
    );
  }
}
export default Game;
