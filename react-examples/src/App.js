import React, { Component } from 'react';
import './App.css';
import { Person } from './components/person/person.component';

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
    // we'll only update the state of the person for which
    // the input field was changed, and so, we first need to
    // find the index of the Person where the input field was
    // changed in the DOM

    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );

    // We can get the person we want to be modified from the
    // state now, but we DON'T want to get it the foll. way:
    
    // const person = this.state.persons[personIndex]; // this will directly mutate the actual person in the state, which should not be done directly, only by the setState() method.

    // In ES5:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // In ES6:
    const person = { ...this.state.persons[personIndex] };

    // now we're manipulating a copy of the original state
    person.name = event.target.value;

    const personsList = [...this.state.persons];
    personsList[personIndex] = person;

    this.setState({persons: personsList});
  }
  
  deletePersonHandler = (personIndex) => {
    // DON'T DO THIS, as this mutates the state directly
    // const personsList = this.state.persons;

    // DO THIS, as this mutates a copy of the state
    // const personsList = this.state.persons.slice();
    const personsList = [...this.state.persons];
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

export default App;
