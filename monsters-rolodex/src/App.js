/**
 * Learnings:
 * 1. Reinforcement of destructuring, filter() and map() in JS.
 * 2. Dynamic Rendering of view due to render() being called by setState() every time the onChange event occurs.
 */

// Look into card-list.component.jsx to understand the comments.


import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';


import './App.css';

// Same as the following:
// class App extends React.Component {...} // use this syntax 
// if we didn't import Component by de-structuring it.
class App extends Component {
  constructor() {
    super(); // Calls React.Component's constructor() function
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // life-cycle method
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * Now that we have searchField value stored in our state, 
   * we can use it to filter out the monsters whose name 
   * doesn't match the searchField.
   * 
   * We will do this inside the render() method by copying the 
   * searchField and monsters object from the state and then 
   * using the filter() and includes() method to filter out 
   * the monsters which do not match the value in the 
   * searchField.
   * 
   * Then, we can simply pass in the filteredMonsters object 
   * as a prop to the CardList property instead of the 
   * original monsters object.
   */

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={event => this.setState({ searchField: event.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  /**
   * This kind of behaviour is achievable because we used 
   * setState() method onChange event for the searchField, and 
   * every time when the setState() is called, render() method 
   * is called again, thereby executing the render() method 
   * again and creating the filteredMonsters and then 
   * returning the components and so on...
   */
}

export default App;
