import React, { Component } from 'react';
import './App.css';

// Same as the following:
// class App extends React.Component {...} // use this syntax 
// if we didn't import Component by de-structuring it.
class App extends Component {
  constructor() {
    super();  // Calls React.Component's constructor() function
    this.state = {
      monsters: []
    };
  }

  /**
   * In the real world, we won't have the state as hard-coded 
   * as we've seen above. We generally have a back-end from 
   * which we generally fetch the data and then we put that 
   * data into our state and then our render() method knows 
   * that state has some data and it now has access to that 
   * data.
   * 
   * Because we extended React.Component class for the App 
   * component, we get the render() method, and along with that 
   * we also get life-cycle methods like componentDidCatch(), 
   * componentDidMount(), componentDidUpdate(), 
   * componentWillMount(), componentWillReceiveProps(), 
   * componentWillUnmount(), componentWillUpdate(), etc which 
   * are essentially methods that get called at different 
   * life-cycle stages of react automatically, when the 
   * respective component gets rendered by react.
   * 
   * The one we will focus on now is componentDidMount() method.
   * componentDidMount() method is called whenever the 
   * respective component is mounted/put-in-by-react onto the 
   * page i.e., when the component is rendered onto the DOM for 
   * the first time.
   */

  // life-cycle method
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  
  render() {
    return (
      <div className="App">
        {
          // We define each <h1> element with a key prop
          // for making the job of react easier, as it uses 
          // Virtual DOM and react doesn't need to always 
          // re - render the entire page to know where does it 
          // have to update the actual DOM. Instead, it uses 
          // the unique key's value to identify the element it 
          // has to change the state of. Because if we have a 
          // really big list with a million elements, to 
          // re-render all of those million elements is an 
          // unfeasible solution and therefore we use the key
          // prop on an HTML element.
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
