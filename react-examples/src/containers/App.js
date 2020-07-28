// Required Packages/Dependencies
import React, { Component } from 'react';

// Custom Components
import Persons from '../components/Persons/Persons.component';
import Cockpit from '../components/Cockpit/Cockpit.component';

// Required Styles
import AppStyleClasses from './App.module.css';

/**
 * Component Creation Lifecycle in Action:
 * ---------------------------------------
 * 
 * Order of execution of methods/functions in creation of a 
 * component is the following:
 *  1. constructor(): this is where we set initial state of 
 *                    our app.
 *  2. getDerivedStateFromProps: a static method which takes in
 *                               props and state as the 2
 *                               parameters. We generally 
 *                               return the state from this 
 *                               lifecycle method.
 *  3. render(): the top-level component is only rendered after
 *               the bottom-level components have finished
 *               their respective lifecycle.
 *  4. componentDidMount(): this will tell react that the top
 *                          level component has been rendered
 *                          properly onto the view.
 *  
 * Note: Before componentDidMount(), another method, which is
 * known as componentWillMount() runs. This method has 
 * officially been discouraged to use because the React team
 * has officially termed this method to be a legacy lifecycle
 * method and therefore, it isn't recommended to use the 
 * method in production. The method, componentWillMount() will
 * be deprecated in the future.
 */

class App extends Component {
  /**
   * Component Lifecycle Execution Order: 1
   */

  // ES6 way of initializing state
  constructor(props) {
    super(props); // w/o this line, the app won't get compiled.
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { name: "Ram", age: 28, id: "a1" },
        { name: "Roop", age: 29, id: "a2" },
        { name: "Max", age: 28, id: "a3" },
      ],
      otherState: "This has some value",
      showPersons: false,
    };
  }

  // ES7 way of initializing state (constructor() called internally)
  // state = {
  //   persons: [
  //     { name: 'Ram', age: 28, id: 'a1' },
  //     { name: 'Roop', age: 29, id: 'a2' },
  //     { name: 'Max', age: 28, id: 'a3' }
  //   ],
  //   otherState: "This has some value",
  //   showPersons: false
  // }

  /**
   * Component Lifecycle Execution Order: 2
   */
  static getDerivedStateFromProps = (props, state) => {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  };

  /**
   * Component Lifecycle Execution Order: 4 (Legacy lifecycle)
   */
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  /**
   * Component Lifecycle Execution Order: 5
   */
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // EVENT HANDLERS
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const personsList = [...this.state.persons];
    personsList[personIndex] = person;

    this.setState({ persons: personsList });
  };

  deletePersonHandler = (personIndex) => {
    const personsList = [...this.state.persons];
    personsList.splice(personIndex, 1);
    this.setState({ persons: personsList });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    /**
     * Component Lifecycle Execution Order: 3
     */
    console.log("[App.js] rendering...");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          nameChanged={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={AppStyleClasses.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;


/**
 * Output: (on starting the app)
 * -----------------------------
 * 
 * [App.js] constructor
 * [App.js] constructor
 * [App.js] getDerivedStateFromProps Object
 *  > {title: "Person Manager"}
 * [App.js] getDerivedStateFromProps Object
 *  > {title: "Person Manager"}
 * [App.js] rendering...
 * [App.js] rendering...
 * [Cockpit.jsx] rendering...
 * [App.js] componentDidMount
 * 
 * 
 * 
 * Output: (clicking on "Toggle Persons" button)
 * ---------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps Object
 *  > {title: "Person Manager"}
 * [App.js] getDerivedStateFromProps Object
 *  > {title: "Person Manager"}
 * [App.js] rendering...
 * [App.js] rendering...
 * [Cockpit.jsx] rendering...
 * [Persons.jsx] rendering...
 * [Person.jsx] rendering...
 * [Person.jsx] rendering...
 * [Person.jsx] rendering...
 */
