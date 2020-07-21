import React, { Component } from 'react';
import './App.css';

import { Person } from './components/person/person.component';

class App extends Component {
  /**
   * Typically, state is a pre-defined variable where we store 
   * the state of a stateful/smart/container component.
   * 
   * A stateful component is a component which can have some 
   * state that can be managed. A component which doesn't have a 
   * state is known as dumb/stateless/presentational component.
   * 
   * In React, we implement a stateful component using a class 
   * which extends React.Component class, and we implement a 
   * stateless component using a function.
   * 
   * Note: We can convert a stateless component (viz. functional 
   * component) into a component which has its own state using 
   * Hooks (useState()). We'll see about it later.
   */

  // state now can be defined like this in ES7
  state = {
    persons: [
      { name: 'Ram', age: 28 },
      { name: 'Roop', age: 29 },
      { name: 'Max', age: 28 }
    ],
    otherState: "This has some value"
  }

  /**
   * The definition of the state above can also be done as 
   * follows (in ES6 way):
   */

  // constructor() {
  //   super();
  //   state = {...}
  // }

  switchNameHandler = () => {
    // console.log('Was clicked');

    // We should never manipulate the directly
    // DON'T DO THIS: this.state.persons[0].name = 'Milo';

    // We can only manipulate the state using the setState()
    // method, which is an async method.

    // setState() method generally merges whatever we change in
    // the current state, with our existing state.
    this.setState({
      persons: [
        { name: "Mar", age: 82 },
        { name: "Poor", age: 92 },
        { name: "Xam", age: 82 },
      ],
    });

    
    /**
     * if this handler is executed, our state will be the 
     * following:
     * 
     * state = {
     *  persons: [
     *    { name: 'Mar', age: 82 },
     *    { name: 'Poor', age: 92 },
     *    { name: 'Xam', age: 82 }
     *  ],
     *  otherState: "This has some value"
     * }
     * 
     * Notice that the value only inside the persons property 
     * has been affected, and no other property has been 
     * affected. The unaffected property will simply be merged 
     * into the state with newly updated properties.
     */
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p>This is really working!</p>
        
        <button
          onClick={this.switchNameHandler}>
          Switch Name
        </button>
        
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
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
export default App;
