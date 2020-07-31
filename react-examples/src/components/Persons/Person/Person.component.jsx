// LIBRARY IMPORTS
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import withClass from '../../../hoc/WithClass/withClass.closureHOC';

class Person extends PureComponent {
  inputElementRef = React.createRef();

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <input 
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
