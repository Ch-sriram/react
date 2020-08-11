// LIBRARY IMPORTS
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// CUSTOM COMPONENTS
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
