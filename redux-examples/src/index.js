// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// STYLING & CUSTOM COMPONENT IMPORTS
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

/**
 * After installing redux, we have to create a STORE, and it 
 * should be created right before the application starts.
 * And so, we create the store inside the [index.js] file.
 * 
 * We do create the STORE instance in this file, but the 
 * REDUCER we pass to the createStore() method, is created 
 * separately, in another place (typically, inside a folder
 * named `store`, in which we write our REDUCER inside 
 * reducer.js file)
 */

const store = createStore(reducer); // reducer: module import

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
