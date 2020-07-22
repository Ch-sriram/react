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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mar", age: 82 },
        { name: event.target.value, age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  }
  
  
  
  render() {
    
    // Inline Styling Example
    const style = { // applied in line 56. explanation after line 82
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p>This is really working!</p>
        
        <button onClick={
          () => this.switchNameHandler("Crazy Ram")
        }
          style={style}
        >
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
}

/**
 * Using Inline Styling, the style will be applied directly 
 * and only to the component, and not to the global context, 
 * which is to all the components.
 * 
 * Using Inline Styling w. JSX, it is pretty hard to implement
 * the pseudo-class/element features, but it is doable.
 */

export default App;