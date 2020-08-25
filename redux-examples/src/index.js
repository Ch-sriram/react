// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
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

/**
 * Middleware in Redux is just a piece of code (specifically a
 * function. For now, we will add our own Middleware, later
 * we'll add Middleware provided by other providers) that 
 * executes before an ACTION gets reduced by a REDUCER, and
 * executes after the ACTION is Dispatched.
 * 
 * For now, we'll create a simple middleware which simply logs
 * each ACTION we dispatch. For that, we'll create a middleware
 * known as `logger` (which is just a constant, we can name it
 * whatever we want to name it). The `logger` here, takes a 
 * function and the function takes in `store` as an input 
 * parameter (this is the case because we'll soon use a 
 * specific method provided by Redux connect our own 
 * middleware to he `store`, and this method provided by Redux
 * will eventually execute our middleware function [which is 
 * `logger` in this case] and give us the required `store`).
 * 
 * The function body of the middleware function - `logger`
 * returns another function which receives an input parameter
 * known as `next` (which is to be named and used as `next` by
 * convention). And now the function that takes in `next` as 
 * the input param, returns another function which receives the
 * `action` that we dispatched in Redux. 
 * 
 * Inside the function that receives the input parameter 
 * `action`, we can now print the information of the 
 * respective `action` in question. Inside the same mentioned
 * function, we'll execute the `next()` method which takes in 
 * the `action` as the argument making it - `next(action);`, 
 * which will let the respective `action` continue to the 
 * REDUCER (NOTE: we can change the contents of `action` as 
 * we want, before we send the `action` to the REDUCER, but we
 * should do it with caution, without causing any unexpected
 * behaviour). In the same function, we can store the return 
 * value of the call `next(action);` in another constant say 
 * `result`, which we can ultimately return at the end.
 * 
 * In between returning the `result` and storing the return
 * value of `next(action);`, we can log the value of the
 * updated state using `store.getState()`.
 */

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
 * The 2nd argument to the createStore() method is also known 
 * as Enhancer (which is a middleware in our example).
 * 
 * Now we've to apply the Middleware that we defined above, to
 * our Redux STORE that's defined below using the
 * `applyMiddleware()` function from the 'redux' package, which
 * we send in as the 2nd param for the createStore() function 
 * as shown below. To the applyMiddleware() function, we pass 
 * in the instance of the middleware (`logger` in our case).
 * 
 * NOTE: to applyMiddleware() function, we can always pass a 
 * list of middleware instances, which will be executed in the 
 * order of the middleware instances inside the list of 
 * middleware instances. Also, the list of middleware instances
 * when passing, need to be spread, instead of being passed as 
 * a list.
 */

const store = createStore(rootReducer, applyMiddleware(logger));

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
