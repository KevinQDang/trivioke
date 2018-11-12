/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  FormGroup, ControlLabel, FormControl, Grid, Row, Col,
} from 'react-bootstrap';

class Table extends Component {
  render() {
    const { handleChange, currentPlayer } = this.props;

    if (currentPlayer === 1) {
      return (
        <div>
          <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Team 1 Name</ControlLabel>
              <FormControl
                type="text"
                name="team1"
                placeholder="Enter text"
                onChange={handleChange}
              />
            </FormGroup>
          </form>
        </div>
      );
    } if (currentPlayer === 2) {
      return (
        <div>
          <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Team 2 Name</ControlLabel>
              <FormControl
                type="text"
                name="team2"
                placeholder="Enter text"
                onChange={handleChange}
              />
            </FormGroup>
          </form>
        </div>
      );
    } if (currentPlayer === 3) {
      return (
        <div>
          <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Team 3 Name</ControlLabel>
              <FormControl
                type="text"
                name="team3"
                placeholder="Enter text"
                onChange={handleChange}
              />
            </FormGroup>
          </form>
        </div>
      );
    }
    // room full or player not in room
    return (
      <div id="roomFull">
        <Grid className="fluid" align="center">
          <Row center="xs">
            <Col>
              <h3>Game Room full! Try again later...</h3>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Table;
