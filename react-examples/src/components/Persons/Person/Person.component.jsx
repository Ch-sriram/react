import React, { Component, Fragment } from 'react';
// import PersonStyleClasses from './Person-style.module.css';
// import Aux from '../../../hoc/Auxiliary/Auxiliary';

class Person extends Component {
  render() {
    console.log("[Person.jsx] rendering...");
    /**
     * We can import {Fragment} from 'react' package and wrap 
     * the JSX inside <Fragment> component, or, 
     * if we don't want to import {Fragment} from 'react', 
     * we can directly use <React.Fragment> component as the
     * wrapper. 
     * 
     * This <Fragment> is same as the <Aux> component that we
     * used previously, the code for both <Fragment> and <Aux>
     * internally, is the same, as they're both HOC's which 
     * just return the child components.
     */
    return (
      <Fragment>
        <p key="comp1" onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
