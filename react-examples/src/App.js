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
    const style = {
      // Inline Styling
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

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
        
        {
          /**
           * we can use a ternary operator to conditionally
           * render a list/component depending on the truth 
           * value of the predicate
           */
          this.state.showPersons ?
            <div>  
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />  
              
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Einstein")}
                changed={this.nameChangedHandler}
              >
                My Hobbies: Racing
              </Person>
      
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
            </div> : null
        }
      </div>
    )
  }
}

export default App;
