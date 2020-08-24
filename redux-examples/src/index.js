// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// STYLING & CUSTOM COMPONENT IMPORTS
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * As our app grows bigger, we might've to handle more ACTIONs,
 * and so we might've to use multiple Reducers. We know that we
 * only have One REDUCER in Redux (i.e., all ACTIONs are 
 * funneled through a single REDUCER during runtime), but 
 * 'redux' package gives us a utility method we can use to 
 * combine multiple REDUCERS into a SINGLE REDUCER, so that we
 * still follow the pattern of having only One REDUCER behind
 * the scenes, but for us, as a developer that we can split-up
 * our code logically so that we don't have a SINGLE REDUCER
 * which has a lot of lines of code - which becomes really hard
 * to code up.
 * 
 * We'll always have to add more ACTION types that we've to 
 * handle inside the REDUCER, but we can always split them up
 * by what kind of feature they're being used on.
 * 
 * For example, in our Counter project, we can handle the 
 * ACTIONs for Counter (viz. INCREMENT, DECREMENT, ADD & 
 * SUBTRACT) in a separate REDUCER, and the remaining ACTIONs 
 * that deal with state.results[] (viz. STORE_RESULT, 
 * DELETE_RESULT) in a separate REDUCER.
 * 
 * And so, we'll handle the ACTIONs related to state.counter 
 * in [reducers/counter.js] and ACTIONs related to state.
 * results in [reducers/results.js] separately.
 * 
 * We'll import both the REDUCERS and then combine them in a 
 * single rootReducer using the combineReducers method from 
 * 'redux'. 
 */

import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";


const rootReducer = combineReducers({
  ctr: counterReducer, res: resultsReducer,
});

// Now, wherever we have to access the state inside the STORE,
// for `counter`, we have to access it using 
// `state.ctr.counter` & to access `results[]`, we have to 
// access `state.res.results` from wherever we refer to the 
// state inside the Redux STORE.

const store = createStore(rootReducer);

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
