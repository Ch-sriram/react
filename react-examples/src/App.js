import React, { Component } from 'react';
import './App.css';
import { Person } from './components/person/person.component';

class App extends Component {
  state = {
    persons: [
      { name: 'Ram', age: 28 },
      { name: 'Roop', age: 29 },
      { name: 'Max', age: 28 }
    ],
    otherState: "This has some value",
    showPersons: false
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 82 },
        { name: "Poor", age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Mar", age: 82 },
        { name: event.target.value, age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }
  
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }
  
  render() {
    // Inline Styling for the <button> in .App component
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    // we can always refer to JSX using simple JS variables
    let persons = null;
    
    if (this.state.showPersons) {
      /**
       * Instead of manually generating each and every Person
       * Component, we can loop through each person in 
       * state.persons using the map() method and return
       * a Person component for each of the person inside
       * the state.persons array.
       */
      
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p>This is really working!</p>
        
        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

/**
 * In line 88, we can simply render the list of Persons
 * using the `persons` variable.
 */

export default App;
