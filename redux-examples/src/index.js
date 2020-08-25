// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// STYLING & CUSTOM COMPONENT IMPORTS
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";


const rootReducer = combineReducers({
  ctr: counterReducer, res: resultsReducer,
});

 // OUR MIDDLEWARE
const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    }
  }
};

/**
 * In order for the Redux STORE to be visible inside the 
 * browser using the Redux DevTools, we need to setup the Redux
 * STORE wrt the Redux DevTools Extension installed in the 
 * respective browser. Which can be done as follows:
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
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
