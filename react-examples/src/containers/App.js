// Required Packages/Dependencies
import React, { Component } from 'react';

// Custom Components
import Persons from '../components/Persons/Persons.component';
import Cockpit from '../components/Cockpit/Cockpit.component';
import WithClass from '../hoc/WithClass/WithClass.hoc';

// Required Styles
import AppStyleClasses from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props); // w/o this line, the app won't get compiled.
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
    showCockpit: true
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

    /**
     * Instead of returning a <div>, here we can create our
     * own component which takes in some styling props and then
     * applies them to the child components. 
     * 
     * These components are a.k.a Higher Order Components, 
     * which are generally used to add some more functionality
     * to the wrapped components under that component.
     */

    return (
      <WithClass styleClasses={AppStyleClasses.App}>
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
            /> : null
        }
        {persons}
      </WithClass>
    );
  }
}

export default App;
