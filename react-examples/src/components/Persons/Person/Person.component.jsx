// LIBRARY IMPORTS
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import withClass from '../../../hoc/WithClass/withClass.closureHOC';
import AuthContext from '../../../context/auth/auth.context';

/**
 * With the usage of the Context API in class-based components,
 * we can see that when we wrap the respective child 
 * component(s) with the Context Object, which is 
 * <AuthContext/> in our case, it is a little difficult to 
 * read and understand, and the most important point, we cannot
 * use that JSX component wrapper inside the lifecycle methods
 * of the class-based components.
 * 
 * In case, if we want to use that Component object, which is a
 * JSX element in our lifecycle methods, then we cannot do so, 
 * and so in React v16.6, we were introduced to use context, in
 * another way, which is a special static property named 
 * `contextType` (and it has to be named `contextType`, and it
 * also has to be a static property, which means that it can
 * accessed from outside, w/o the need of instantiating an 
 * object based on a certain class).
 * 
 * For the `contextType` static property, we simply assign it
 * the Context Object that we imported, as a reference, as 
 * follows: `static contextType = AuthContext;`
 * 
 * This allows React to automatically connect our class-based
 * component, to the context, behind the scenes, and it gives
 * us access to use a new property called `this.context` which
 * allows us the access to our context defined inside the 
 * App component's <AuthContext.Provider value={{...}} />
 * `value` prop defined above.
 * 
 * And so, we get rid of wrapping the components which need to
 * use the Context object, inside <AuthContext.Consumer/> JSX
 * element. We can simply use the `this.context` property in
 * the respective component where the aforementioned static 
 * `contextType` property is connected appropriately, to refer
 * to the context which is required by the component.
 */

class Person extends PureComponent {
  inputElementRef = React.createRef();

  /** CONNECTING `contextType` static property to Context */
  static contextType = AuthContext;

  // Using `this.context` to refer to the Context object
  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  
  render() {
    console.log("[Person.jsx] rendering...");

    /**
     * Instead of wrapping the the context required elements 
     * with <AuthContext.Consumer />, we can simply use
     * `this.context` here, to access the context.
     */
    return (
      <Aux>
        {
          this.context.authenticated ?
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
