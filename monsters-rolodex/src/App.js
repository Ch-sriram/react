import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hi, my name is Sriram and I'm learning React.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/**
 * We know that we can write functions that return HTML, but we
 * can also write classes that return HTML. The reason why we 
 * would want to use a class is because React has given us the 
 * ability to write classes that hve a lot more functionality 
 * on them compared to a function that returns some HTML.
 * 
 * In order to make a class return HTML, we have to import 
 * Component from 'react' as shown above in line #1. Now, 
 * instead of the function above, we would make it a class 
 * as shown below, by extending the Component class. We write 
 * our HTML that needs to be returned, inside the render() 
 * method.
 */

/**
 * The advantage with a class is that we can now control state
 * (data/view) depending on the action we apply on some 
 * interactive element in our HTML page. For example, we can 
 * make a button and onclick event, we can handle it to change 
 * the text above the button. And for this reason, we use the 
 * class to make a component, where we get access to state. To 
 * change the state (JS Object with properties that we can 
 * access at any point inside of our class), we define the 
 * constructor() method inside the App component class inside 
 * which we first call the super() method, after which, we 
 * define our state as a JS object, as shown below.
 * 
 * To actually change the text onclick event on the button, we 
 * use the setState() method (which is embedded by react on 
 * every single HTML element) which takes in properties inside 
 * the state we defined, that we want to change.
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Padma"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: "Hello Sriram"})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
