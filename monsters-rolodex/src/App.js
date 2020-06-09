/**
 * Learnings:
 * 1. Handling DOM events using JSX.
 * 2. How to get data from the user input in react.
 * 3. setState() function and its asynchronous behaviour.
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
   * The next component we want to add in, is our search 
   * feature. That search feature is a text-box that takes in 
   * text input and depending on the the text input, makes 
   * sure that only those monster cards remain on the page. 
   * 
   * To render a text-box on to the front-end, we will simply 
   * use an input HTML element which is of type="search". On 
   * top of that, we also want to take control of whatever the 
   * user is typing into the search box and store it inside 
   * our state. For that, we use the onChange event on the 
   * input element as shown below. onChange is an event handler
   * that takes in a parameter called event which has the info
   * about which event has occurred.
   * 
   * If we log the event object, we'd get details on the event 
   * that has occurred. And if we want to get the element on 
   * which the event is occurring, we'd just simply refer it 
   * as event.target as shown below.
   * 
   * To get the value that has been typed inside the search 
   * box, we'd just get the value inside the target that's 
   * being changed every time i.e., event.target.value;
   */
  
  // render() {
  //   return (
  //     <div className="App">
  //       <input
  //         type="search"
  //         placeholder="search monsters"
  //         onChange={event => {console.log(event.target.value)}}
  //       />

  //       <CardList monsters={this.state.monsters} />
  //     </div>
  //   );
  // }
  
  /**
   * Now, instead of logging the value in the event, we can 
   * store the typed in text in our state inside our 
   * searchField object.
   * 
   * The state.searchField, when we log it onto the console, 
   * we'd not see the immediate value being registered inside 
   * it and that's because of the behaviour of the setState() 
   * function, which is an asynchronous function.
   */

  // render() {
  //   return (
  //     <div className="App">
  //       <input
  //         type="search"
  //         placeholder="search monsters"
  //         onChange={event => {
  //           this.setState({ searchField: event.target.value });
  //           console.log(this.state);
  //         }}
  //       />

  //       <CardList monsters={this.state.monsters} />
  //     </div>
  //   );
  // }

  /**
   * From the code above, we would get a weird behaviour which
   * is that, when we log the state, we would see that 
   * searchField's value wouldn't be updated as soon as we log 
   * it, and this happens because setState() function is an 
   * asynchronous function. And so, if we want the perfect 
   * searchField's value to be shown as soon as it is changed,
   * we'd have to send in a 2nd parameter to the setState() 
   * function to which we send a callback function. The 
   * callback runs after the setState() function has completed 
   * its work. Therefore, we'd do it as follows:
   */

  // render() {
  //   return (
  //     <div className="App">
  //       <input
  //         type="search"
  //         placeholder="search monsters"
  //         onChange={event => 
  //           this.setState({ searchField: event.target.value }, () => console.log(this.state))
  //         }
  //       />

  //       <CardList monsters={this.state.monsters} />
  //     </div>
  //   );
  // }

  /**
   * Now we will see the correct output in the searchField, 
   * being updated instantly after the state is changed, and 
   * that's because we're passing a callback to the setState() 
   * function in its 2nd parameter.
   * 
   * Now, we just want to setState() i.e., set the value of 
   * searchField after taking the input from the user.So for 
   * that, we can get rid of the logging step altogether.
   */

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={event => this.setState({ searchField: event.target.value })}
        />

        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
