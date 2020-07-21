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
    otherState: "This has some value"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 82 },
        { name: "Poor", age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }

  /**
   * If we want to change the name for say, the 2nd Person, then
   * we can take input from the user dynamically to change the 
   * 2nd Person's name, where we will handle the onChange event
   * at the Person component located in person.component.jsx
   * 
   * We will handle the name change using nameChangedHandler 
   * method as follows:
   */

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mar", age: 82 },
        { name: event.target.value, age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }
  

  // the handler defined above can be sent as a prop to 2nd Person component as follows (defined in line 68)
  render() {
    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p>This is really working!</p>
        
        <button onClick={
          () => this.switchNameHandler("Crazy Ram")
        }>
          Switch Name
        </button>
        
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
      </div>
    )
  }

  /**
   * the nameChangedHandler is called in the Person component
   * for an onChange event on an input (type="text") element.
   */
}

export default App;