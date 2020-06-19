/**
 * Learnings:
 * 1. Writing our own methods in our class components.
 * 2. Why are the lifecycle methods (componentDidMount, render, etc) defined as a normal function instead of an arrow function.
 * 3. Why should we define our own class methods as an arrow function instead of a traditional function.
 */

// Look into card-list.component.jsx to understand the comments.


import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


import './App.css';

// Same as the following:
// class App extends React.Component {...} // use this syntax 
// if we didn't import Component by de-structuring it.
class App extends Component {
  constructor() {
    super(); // Calls React.Component's constructor() function
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // life-cycle method
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * We will take the anonymous function inside the
   * handleChange prop passed onto the SearchBox component and
   * make it a function inside our class, so that we can use
   * it again somewhere else, if need arises.
   *
   * To do that, if we define the handleChange() function as
   * we define a lifecycle method like componentDidMount() and
   * the render() methods, we'd get an error, if we don't
   * define the handleChange inside the constructor and bind
   * it to React's context (as it will automatically bind to
   * the window object's context). Example below:
   */

  // handleChange(event) {
  //   this.setState({ searchField: event.target.value });
  // }

  // We would get the following error because of the definition
  // above: TypeError: Cannot read property 'setState' of 
  // undefined
  
  /**
   * To avoid the error, we can just bind the React class' 
   * context to the handleChange method in the constructor() 
   * function as shown in line #28.
   * 
   * But doing that is a tedious task. So instead of trying to 
   * bind every user-defined method inside the class like 
   * that, we'd simply use arrow functions to automatically 
   * bind React's context to the this inside the function.
   */

  handleChange = event => this.setState({ searchField: event.target.value });
  
  /**
   * Now, the this keyword inside the handleChange function 
   * directly points to the context that is calling the 
   * handleChange() function, which is the App component and 
   * it means that the this inside the handleChange() now 
   * points to React's context.
   * 
   * We can now comment line #28 (i.e., the binding of the 
   * this in handleChange() function to the context of the App 
   * component).
   */

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
 
export default App;

/**
 * The lifecycle methods can be called in the traditional 
 * function way because the App component actually extends the 
 * React.Component class, and in that class, the lifecycle 
 * methods are bound to the Component class' context, because 
 * of which they can be defined/overridden as a normal 
 * traditional function as shown above.
 */