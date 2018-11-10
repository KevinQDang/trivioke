/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { winner } = this.props;
    return (
      <div id="gameOver">
        <Grid className="fluid" align="center">
          <Row center="xs">
            <Col>
              <h1> Game Over! </h1>
              <h2> {winner} Wins!</h2>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GameOver;
