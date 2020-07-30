import React, { Component } from 'react';
// import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class Person extends Component {
  render() {
    console.log("[Person.jsx] rendering...");
    /**
     * We are wrapping all the components inside the <Aux> 
     * component. <Aux> component is a HOC that simply returns
     * the child components back as the output.
     */
    return (
      <Aux>
        <p key="comp1" onClick={this.props.click}>
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
