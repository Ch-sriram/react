// Required Packages/Dependencies
import React, { Component } from 'react';

// Custom Components
import Persons from '../components/Persons/Persons.component';
import Cockpit from '../components/Cockpit/Cockpit.component';
// import WithClass from '../hoc/WithClass/withClass.hoc';
import withClass from '../hoc/WithClass/withClass.closureHOC';
import Aux from '../hoc/Auxiliary/Auxiliary.hoc';

// Required Styles
import AppStyleClasses from './App.module.css';

/**
 * Assume that, for the <Person/> component, we want to add 
 * in a dummy authentication whose handler is written inside
 * the <App/> component, and it is invoked from the <Cockpit/>
 * component. The <Cockpit/> component receives the 
 * loginHandler() function's reference as a `prop` from App
 * component.
 * 
 * Now, the loginHandler() event handler, which is invoked from
 * the <Cockpit/> component, will simply change some state 
 * object, let's say we have a new state variable called 
 * `authenticated`, which is initially false.
 * 
 * Inside the loginHandler() function, we can call setState and
 * set `authenticated` to true, and this loginHandler()'s 
 * reference is sent to the <Cockpit/> component as a property
 * called `login`.
 * 
 * Now, we also want to get the information whether every 
 * <Person/> component is authenticated or not. And since the
 * state of the authentication status, which is `authenticated`
 * is stored at <App/> component, and also, since the App
 * component only has access to the <Persons/> component, we 
 * can send in the state value of `authenticated` as a property
 * to the <Persons/> component (let's say `isAuthenticated` 
 * prop). Inside the <Persons/> component, we can pass the 
 * `isAuthenticated` property to each <Person/> as (say) 
 * `isAuth` property. And inside the <Person/> component, we
 * can print information on each <Person/> whether it is 
 * "Authenticated" or "Not Authenticated".
 */

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

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          nameChanged={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

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
        {
          this.state.showCockpit ?   
            <Cockpit
              title={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            /> : null
        }
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, AppStyleClasses.App);
