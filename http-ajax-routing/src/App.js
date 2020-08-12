// LIBRARY IMPORTS
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// CUSTOM COMPONENTS
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/my-app">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
    /**
     * Now, every route configure in this app will have the 
     * prefix of "/my-app" before its respective route.
     * 
     * By default, the `basename` is always set to "/".
     */
  }
}

export default App;
