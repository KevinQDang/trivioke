/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
// wait for 3 players

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };   
    console.log(props);
  }

  render() {
    const {
      question, answers,
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
    if (answers) {
      const multiChoice = [
        <div key="trivia">
          <iframe title="chat" src="https://tokbox.com/embed/embed/ot-embed.js?embedId=777840f4-d3c3-4d30-9116-c0853af4adbc&room=DEFAULT_ROOM&iframe=true" width="800" height="640" allow="microphone; camera" />
          <div key="question"><h3>{escapeHtml(question.question)}</h3></div>
          <div key="answers">{answers.map((answer, i) => <div key={i}>{answer}</div>)}</div>
        </div>,
      ];
      return <div>{multiChoice}</div>;
    }
    return <div>Loading</div>;
  }
}
export default Trivia;
