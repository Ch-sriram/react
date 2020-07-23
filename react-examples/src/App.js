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
        { id: 'abc1', name: "Mar", age: 82 },
        { id: 'abc2', name: event.target.value, age: 92 },
        { id: 'abc3', name: "Xam", age: 82 },
      ],
    });
  }
  
  deletePersonHandler = (personIndex) => {
    // DON'T DO THIS:
    // const personsList = this.state.persons;

    // DO THIS:
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

    /**
     * In React, we always have to have a key prop defined for
     * a component/element that's generated as a list. This
     * is not mandatory, but it is highly recommended because
     * of the way React renders lists. It compares the changes
     * of the list-items in the list with how they were before 
     * the state change. This identification is done using the 
     * `key` prop in React.
     * 
     * The `key` prop for a component in the list can be any 
     * unique identifier (numeric/alpha-numeric/etc), main 
     * take-away being "unique". Two components in the same 
     * list cannot have the same `key` prop, they definitely 
     * should only have 1 unique key each.
     * 
     * To maintain uniqueness of `key` prop, we can use the 
     * index of the element in the array, but that's not a 
     * good way to store keys as everything might not be 
     * fetched from an array, they can also be fetched from
     * some API and the list-items need not be having an index.
     * 
     * If the list-items are fetched from some API, then they
     * most definitely have some unique ID to identify each
     * item uniquely. For now, we might just define an 'id'
     * of our own for each Person, but that's just for the 
     * demonstration of `key` props.
     * 
     * We will see that we still get the following warning:
     *  "Each child in a list should have a unique `key` prop."
     * 
     * But why does this happen? We'll see what to do, in the 
     * next commit.
     */


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
