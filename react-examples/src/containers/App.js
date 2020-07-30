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

class App extends Component {
  constructor(props) {
    super(props); // w/o this line, the app won't get compiled.
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { name: 'Ram', age: 28, id: 'a1' },
      { name: 'Roop', age: "29", id: 'a2' },
      { name: 'Max', age: 28, id: 'a3' }
    ],
    otherState: "This has some value",
    showPersons: false,
    showCockpit: true,
    inputKeyPressCounter: 0
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

    // THIS WAY OF SETTING STATE WHERE THE STATE DEPENDS ON
    // THE PREVIOUS STATE is INCORRECT, although it might work
    // for a really small app like ours.
    // this.setState({
    //   persons,
    //   inputKeyPressCounter: this.state.inputKeyPressCounter + 1
    // });

    /**
     * The way of setting state above, where one part of the 
     * new state depends on some guaranteed updated value in 
     * the previous state, in that case, this approach can 
     * get us into trouble by introducing inconsistent state.
     * 
     * This happens because React, behind-the-scenes, doesn't
     * immediately trigger a an update of the state of the 
     * respective component and the re-render cycle.
     * 
     * Instead, it's internally scheduled by React and so, 
     * React will perform the state update(s) and re-render 
     * cycle when it has the available resources to do it after
     * it follows its internal scheduling for state updation 
     * and re-render cycles.
     * 
     * In simple apps like this one, the way prescribed above
     * where we set the state as shown, may work, but in a big
     * app, something like the aforementioned way of setting
     * the state won't work, and so, we have to set the state
     * using the previous state as follows:
     * 
     * NOTE that setState() takes in a function with 2 args, 
     * 1st arg is `prevState` and the 2nd arg is `props`.
     */

    this.setState((prevState, props) => {
      return {
        persons,
        inputKeyPressCounter: prevState.inputKeyPressCounter + 1
      };
    });

    /** 
     * The aforementioned way of updating the state is safe
     * when the current state itself is dependent on the 
     * previous state.
     */
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
