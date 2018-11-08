/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      question, triviaRequest, hidden, nextTeam, increaseScore, trigger, reverse,
    } = this.props;
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
    if (question) {
      let answers;
      if (reverse) {
        answers = [
          <button key="c" type="button" onClick={() => { triviaRequest(); nextTeam(); increaseScore(); }}>{escapeHtml(reverseStr(question.correct_answer))}</button>,
          <button key="i1" onClick={trigger} style={{ display: hidden ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(question.incorrect_answers[0]))}</button>,
          <button key="i2" onClick={trigger} style={{ display: hidden ? 'block' : 'none' }} type="button">{escapeHtml(reverseStr(question.incorrect_answers[1]))}</button>,
          <button key="i3" onClick={trigger} type="button">{escapeHtml(reverseStr(question.incorrect_answers[2]))}</button>,
        ];
      } else {
        answers = [
          <button key="c" type="button" onClick={() => { triviaRequest(); nextTeam(); increaseScore(); }}>{escapeHtml(question.correct_answer)}</button>,
          <button key="i1" onClick={trigger} style={{ display: hidden ? 'block' : 'none' }} type="button">{escapeHtml(question.incorrect_answers[0])}</button>,
          <button key="i2" onClick={trigger} style={{ display: hidden ? 'block' : 'none' }} type="button">{escapeHtml(question.incorrect_answers[1])}</button>,
          <button key="i3" onClick={trigger} type="button">{escapeHtml(question.incorrect_answers[2])}</button>,
        ];
      }
      const shuffleArr = shuffle(answers);
      const multiChoice = [
        <div key="trivia">
          <iframe title="chat" src="https://tokbox.com/embed/embed/ot-embed.js?embedId=777840f4-d3c3-4d30-9116-c0853af4adbc&room=DEFAULT_ROOM&iframe=true" width="800" height="640" allow="microphone; camera" />
          <div key="question"><h3>{escapeHtml(question.question)}</h3></div>
          <div key="answers">{shuffleArr.map((answer, i) => <div key={i}>{answer}</div>)}</div>
        </div>,
      ];
      return <div>{multiChoice}</div>;
    }
    return <div>Loading</div>;
  }
}
export default Trivia;
