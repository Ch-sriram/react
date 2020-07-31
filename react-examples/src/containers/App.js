// Required Packages/Dependencies
import React, { Component } from 'react';

// Custom Components
import Persons from '../components/Persons/Persons.component';
import Cockpit from '../components/Cockpit/Cockpit.component';
// import WithClass from '../hoc/WithClass/withClass.hoc';
import withClass from '../hoc/WithClass/withClass.closureHOC';
import Aux from '../hoc/Auxiliary/Auxiliary.hoc';
import AuthContext from '../context/auth/auth.context';

// Required Styles
import AppStyleClasses from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { name: 'Ram', age: 28, id: 'a1' },
      { name: 'Roop', age: 29, id: 'a2' },
      { name: 'Max', age: 28, id: 'a3' }
    ],
    otherState: "This has some value",
    showPersons: false,
    showCockpit: true,
    inputKeyPressCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  };

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  // EVENT HANDLERS
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons,
        inputKeyPressCounter: prevState.inputKeyPressCounter + 1
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    const personsList = [...this.state.persons];
    personsList.splice(personIndex, 1);
    this.setState({ persons: personsList });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  loginHandler = () => {
    this.setState(prevState => {
      return { authenticated: !prevState.authenticated };      
    });
  }

  render() {
    console.log("[App.js] rendering...");
    let persons = null;

    /**
     * Because of context object, we need not send information
     * on `state.authenticated` as a prop.
     */

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          nameChanged={this.nameChangedHandler}
        />
      );
    }

    /**
     * Now, the imported <AuthContext/> component should wrap 
     * all the components that would need to use the context
     * variables/functions in our app.
     * 
     * In this case, the <Person/> and the <Cockpit/> 
     * components need to use the context variable/functions,
     * and so, we'll wrap that part of the returned JSX from
     * this App component, inside <AuthContext.Provider/>
     * component. Because we're providing the context to the
     * components that are wrapped inside the <AuthContext/>
     * component.
     * 
     * The <AuthContext.Provider/> component, takes in a 
     * `value` prop, in which we pass in the new values to the 
     * context, depending on what we're trying to provide the
     * context for. If the `value` prop isn't described, then
     * the default context's definition will be taken as the 
     * value of the context.
     * 
     * In this case, both <Cockpit/> and the <Persons/> 
     * components can access the context object's variables or
     * functions. In case of <Persons/> component, since 
     * <Person/> is the child component of <Persons/> 
     * component, we can also use the context directly inside
     * the <Person/> component, which is what we want.
     */

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({
              showCockpit: !this.state.showCockpit,
            });
          }}
        >
          {this.state.showCockpit ? "Remove Cockpit" : "Show Cockpit"}
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, AppStyleClasses.App);

/**
 * The one thing that doesn't change when using the Context API
 * is that, we still maintain the info to be passed, inside the
 * state of the component, because, react will only re-render
 * when the state/props in some component down the component 
 * tree changes.
 */
