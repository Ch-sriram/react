// LIBRARY IMPORTS
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// CUSTOM COMPONENTS
import Blog from './containers/Blog/Blog';

/**
 * Now, since the <Blog /> Component is wrapped by the 
 * <BrowserRouter /> Component, all the sub-components with the 
 * <Route /> Component associated to them will now receive 
 * certain props which will have information on the routing. It 
 * will fields like `match`, `history`, `location`, etc. This 
 * information helps us make certain decisions depending on 
 * which component/route is currently being shown on the view.
 */

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
