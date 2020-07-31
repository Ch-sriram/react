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
        {
          this.props.isAuth ?
            <p>Authenticated</p> :
            <p>Please Log In</p>
        }
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


/**
 * The problem with this approach is that here, even when 
 * there's no need of the information for <Persons/> component,
 * even then, it is just sending the `isAuth` property from 
 * <App/> to <Person/> via `isAuthenticated` property, which is
 * the state variable from <App/> called `authenticated`.
 * 
 * Now, the <Persons/> isn't using the state info - 
 * `authenticated` from the <App/> and acting just as mediatory
 * between the <App/> and the <Person/>, which makes <Persons/>
 * a simple mediatory component, whereas, the purpose of a 
 * component should just, it being a standalone component, 
 * which is generic and can be used elsewhere when defined as 
 * a part of the library.
 * 
 * Therefore, if there's a component tree like the following:
 *    <A/> -> <B/> -> <C/> -> <D/> -> <E/>
 * And on this flow of components, if <E/> wants to know some
 * state information at <A/>, then the components <B/>, <C/> & 
 * <D/> simply become components that are also mediators and 
 * they have to pass in the info from <A/> to <E/> as a prop, 
 * which is not an efficient solution to this problem. 
 * 
 * And so, the right approach to solve this kind of a problem
 * is to use the Context API using `React.createContext()` 
 * which we'll see later.
 */
