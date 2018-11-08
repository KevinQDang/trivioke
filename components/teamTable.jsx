/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Table extends Component {
  // change this component to user add name and
  // conditional templates for if someone in room
  // first person to join can add category, other players only join
  render() {
    const { handleChange } = this.props;
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
  }
}
export default Table;
