// LIBRARY IMPORTS
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// CUSTOM COMPONENTS
import Blog from './containers/Blog/Blog';

/**
 * We will import { BrowserRouter } from 'react-router-dom',
 * where react-router-com contains the code to render whatever 
 * we route onto the SPA, into the mentioned route, to the DOM.
 * 
 * We will wrap the every component returned by the App 
 * component inside the <BrowserRouter/> component as shown 
 * below. Now, every child component wrapped inside the 
 * <BrowserRouter/> Component, will be able to use Routing.
 * 
 * For now, we want to only load the Posts in our home "/" 
 * route, and for that, we will convert the <FullPost/> and 
 * <NewPost/> into containers, as now, they'll be new routes 
 * that will be rendered depending on the route chosen by the
 * browser/client. Even a new component, Posts will be created,
 * whose only job is to render each Post component onto the 
 * home "/" route.
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
