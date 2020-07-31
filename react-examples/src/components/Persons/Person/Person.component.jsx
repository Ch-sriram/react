// LIBRARY IMPORTS
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import withClass from '../../../hoc/WithClass/withClass.closureHOC';

class Person extends PureComponent {
  /**
   * If we want to use Refs, we have a new way introduced in React v16.3, which is by using `React.createRef()` inside the constructor() of our
   * component, and then assign that object to some variable in our constructor. We would pass in this object reference to the `ref` prop in
   * the respective JSX element inside our component where we need to modify/manipulate the respective JSX element.
   */

  /** ES6 way */
  // constructor(props) {
  //   super(props);
  //   this.inputElementRef = React.createRef();
  // }

  /** ES7 way of creating a Ref object in the component */
  inputElementRef = React.createRef();

  componentDidMount() {
    this.inputElementRef.current.focus(); // Note that to refer to the current JSX element, we are using .current before .focus()
  }

  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <input
          // we just pass in the Ref object we made as follows. Behind the scenes, React will make the necessary connection of the Ref object
          // and the respective JSX element. 
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string
};

export default withClass(Person, PersonStyleClasses.Person);


/**
 * We can use either approach, React.createRef(), or with passing a function as we saw earlier.
 */
