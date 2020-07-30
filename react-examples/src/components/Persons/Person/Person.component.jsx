// LIBRARY IMPORTS
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import withClass from '../../../hoc/WithClass/withClass.closureHOC';

class Person extends PureComponent {
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

/**
 * After a component (functional/class-based) is defined, in 
 * react, we can always use PropTypes to define the types of
 * the props that a particular component expects. Here "types"
 * mean "data types" of the props. 
 * 
 * This is really helpful when we are trying to make a library
 * to be used by the public, in that case, we'd much rather 
 * just have an enforcement methodology for users who are using
 * the library, to make sure that they send in strong-typed 
 * information. Example: If we have to collect a number for 
 * some calculation, then it should be sent as a number, 
 * instead of a string, and this kind of enforcement of types
 * can be done using PropTypes.
 * 
 * The errors will be issued as warnings when running the app 
 * in dev mode, these errors won't make the app stop completely
 * but they do enforce strong-typing in the app. 
 */

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string
};

export default withClass(Person, PersonStyleClasses.Person);

/**
 * We will see that error will be raised in dev-mode (but the
 * rendering of the components still won't stop) in console, 
 * if any type of the prop is not properly followed.
 * 
 * We can send in an age of type string in <App/> component,
 * and we'd get the following error:
 * 
 * Warning: Failed prop type: Invalid prop `age` of type 
 * `string` supplied to `Person`, expected `number`.
 *  in Person (at withClass.closureHOC.jsx:22)
 *  in Unknown (at Persons.component.jsx:25)
 *  in Persons (at App.js:121)
 *  in Auxiliary (at App.js:130)
 *  in App (at withClass.closureHOC.jsx:22)
 *  in div (at withClass.closureHOC.jsx:21)
 *  in Unknown (at src/index.js:8)
 * 
 */
