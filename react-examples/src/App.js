import React, { Component } from 'react';
import './App.css';
import { Person } from './components/person/person.component';

class App extends Component {
  // state now can be defined like this in ES7
  state = {
    persons: [
      { name: 'Ram', age: 28 },
      { name: 'Roop', age: 29 },
      { name: 'Max', age: 28 }
    ],
    otherState: "This has some value"
  }

  // we can also send arguments to a event handler function
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Milo';

    this.setState({
      persons: [
        { name: newName, age: 82 },
        { name: "Poor", age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }

  // switchNameHandler's reference is passed to the click attribute inside the 2nd Person's component.
  // We can open Person component defined as person.component.jsx to see the props.click being used for onClick event.
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
   * Note that there are two ways to pass an argument to a 
   * handler method.
   *  1. To the reference of the handler method, we bind the 
   *     "this" context and we pass in the argument we want, as 
   *     seen in line 52.
   *  2. To pass in an arrow function from which we return the 
   *     result of the call on the handler whilst passing the 
   *     required argument.
   */

}

export default App;