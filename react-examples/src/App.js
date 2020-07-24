// Required Packages/Dependencies
import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';

// Custom Components
import Person from './components/person/person.component';

class App extends Component {
  state = {
    persons: [
      { name: 'Ram', age: 28, id: 'a1' },
      { name: 'Roop', age: 29, id: 'a2' },
      { name: 'Max', age: 28, id: 'a3' }
    ],
    otherState: "This has some value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const personsList = [...this.state.persons];
    personsList[personIndex] = person;

    this.setState({persons: personsList});
  }
  
  deletePersonHandler = (personIndex) => {
    const personsList = [...this.state.persons];
    personsList.splice(personIndex, 1);
    this.setState({ persons: personsList });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      color: "white",
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // to use radium, we can add the `hover` state as follows
      ':hover': {
        backgroundColor: "lightgreen",
        color: "rgba(0, 0, 0, .9)"
      }
    };

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      
      // this is how we dynamically change the styling
      style.backgroundColor = "red";

      // making use of radium for assigning :hover rules
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'rgba(0, 0, 0, .9)'
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2 && classes.indexOf('red') === -1) {
      classes.push('red');
    }
    
    if (this.state.persons.length <= 1 && classes.indexOf('bold') === -1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>This is a React Example</h1>
          <p className={classes.join(" ")}>This is really working!</p>

          <button onClick={this.togglePersonsHandler} style={style}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
