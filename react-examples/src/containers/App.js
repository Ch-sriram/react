// Required Packages/Dependencies
import React, { Component } from 'react';

// Custom Components
import Persons from '../components/Persons/Persons.component';
import Cockpit from '../components/Cockpit/Cockpit.component';
// import WithClass from '../hoc/WithClass/withClass.closureHOC';
import withClass from '../hoc/WithClass/withClass.closureHOC';
import Aux from '../hoc/Auxiliary/Auxiliary.hoc';

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
     * Instead of using the <WithClass/> HOC to wrap the child
     * components, we can simply use the <Aux/> or 
     * <React.Fragment/> to wrap the child components, and
     * when exporting this App component, we can call 
     * `withClass(App, AppStyleClass.App)` as shown at the end.
     * 
     * That closureHOC function returns a component with the
     * styles applied to the App component inside a <div>.
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
      </Aux>
    );
  }
}

export default withClass(App, AppStyleClasses.App);

/**
 * Both ways of using a HOC are popular, if we want more
 * control over the component in question, we go for the HOC 
 * with the closure approach, which is simply called as 
 * function.
 */
