/**
 * Learnings:
 * 1. How are components defined and imported.
 * 2. What are props and props.children.
 * 3. How to pass in attributes to the component, and use them using props in the component.
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
   * We can see the usage of CardList component with a prop
   * passed into it which is 'name' with a value of "Sriram".
   *  <CardList name="Sriram" />
   *
   * Any attribute we send into the CardList component will be
   * termed as a property in the props object.
   * 
   * One of the main property inside the props object is known 
   * as 'children' and we can refer to it in the actual 
   * component using props.children.
   * 
   * The props.children by default is null valued. But it 
   * contains data whenever there are children inside the 
   * component. Anything inside the CardList component is 
   * considered to be a child element of the CardList 
   * Component, and so, we generally refer to the children in 
   * the CardList component using props.children in the actual 
   * jsx file where the CardList component is defined.
   * 
   * In our example below, the Child prop is <h1>Ramki</h1>.
   * To render it onto the webpage, we have to refer to 
   * props.children in the CardList component.
   * 
   *    <CardList name="Sriram"><h1>Ramki</h1></CardList>
   * 
   * Instead of just an h1 element, we will now send in the 
   * entire render the entire monster object as seen below.
   */
  
  render() {
    return (
      <div className="App">
        <CardList name="Sriram">
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
