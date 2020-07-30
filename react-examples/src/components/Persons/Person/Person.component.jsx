import React, { Component } from 'react';
// import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';

class Person extends Component {
  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
