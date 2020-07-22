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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Mar", age: 82 },
        { name: event.target.value, age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }
  
  // this approach has a flaw, which will be fixed later
  deletePersonHandler = (personIndex) => {
    const personsList = this.state.persons;
    personsList.splice(personIndex, 1); // remove 1 element from starting from personIndex
    this.setState({ persons: personsList });
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
       * Now, we'll just add a handler to every Person 
       * component, which will delete that respective component
       * when the name of the respective component is clicked.
       * 
       * For this, the handler (which is deletePersonHandler)
       * should know which Person component to delete before
       * actually deleting it. And so, for that, we'll use the
       * `index` given as the 2nd parameter in the map() method
       * and do the following with it:
       */
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
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
