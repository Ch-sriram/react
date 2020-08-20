// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// STYLING & CUSTOM COMPONENT IMPORTS
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

/**
 * In order to connect the Redux's STORE to the React App, we
 * wrap our <App /> Component with the <Provider /> Component
 * as shown below. And we send in a `store` prop, to the 
 * <Provider /> Component, where we assign our STORE to the 
 * `store` prop w.r.t the <Provider /> Component.
 */

const store = createStore(reducer); // reducer: module import

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
