import React, { Component } from 'react';
import PersonStyleClasses from './Person-style.module.css';

class Person extends Component {
  render() {
    console.log("[Person.jsx] rendering...");
    /**
     * What we have to take care when we return a list of 
     * components as JSX, in that case, we have to give a `key`
     * property to every component inside the list.
     */
    return [
      <p key="comp1" onClick={this.props.click}>
        I'm {this.props.name} and I'm {this.props.age} years old!
      </p>,
      <p key={"comp2"}>{this.props.children}</p>,
      <input
        key="comp3"
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      />
    ];
  }
}

export default Person;
