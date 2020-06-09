/**
 * Learnings:
 * 1. How to send the state using props.
 * 2. Why should we make certain code specific to certain components.
 * 3. How to nest a component inside another component.
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
    };
  }

  // life-cycle method
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * Earlier, we were just passing props.children in between 
   * the div element inside the CardList component. The props.
   * children contained what we sent in this App component 
   * into the CardList component.
   * 
   * But in general, we never do that because right now, the 
   * App component is responsible for rendering all the names 
   * in the state (monster object). We never give that kind of 
   * a responsibility to the App component, but we give that 
   * kind of a responsibility to the CardList component 
   * because that's how we separate concerns into components, 
   * and also the CardList component should be responsible to 
   * render the monsters' names in the first place.
   * 
   * Therefore, what we do is, we send in the monster object 
   * through to the CardList component as a prop as follows:
   * 
   *    <CardList monsters={this.state.monsters} />
   * 
   * Now we can see that the functionality of generating the 
   * names has been delegated to the CardList component (Look 
   * into the CardList component for more information).
   * 
   * Because of what we did, the App component need not worry 
   * about rendering the monster cards, it will be taken care 
   * by the CardList component.
   */
  
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
