/**
 * This file doesn't hold any react code and we'll execute this
 * file with Node JS. This file is to show an example on how we
 * use Redux independently, without React, by only using pure 
 * JavaScript.
 */

/**
 * To use redux, we need a Store, Reducer, Action & 
 * Subscription.
 */

const redux = require('redux'); // import can't be used in Node
const createStore = redux.createStore;  // redux.createStore() is a function, and we're storing the reference of that function in our createStore constant.

/**
 * Before passing any state to the rootReducer, we make our
 * own initialState, which can have anything as an initial 
 * state value.
 */
const initialState = { counter: 0, };

// REDUCER
/**
 * Reducer is a collection of a bunch of all the reducers at a
 * single place. The Reducer takes in a function with 2 
 * arguments. param1 is the `currentState` (known as `state`) 
 * and param2 is `action`. The function, depending on the 
 * `action`'s type, can update the old `state` and return the 
 * new `state`.
 * 
 * For now, we will keep it simple, and return the state we 
 * take in as param1.
 */
const rootReducer = (state = initialState, action) => state;

// STORE -- to make a STORE, we import redux from 'redux'
const store = createStore(rootReducer);  // needs a reducer to be passed to it, and so, the REDUCER instance has to be created before we create the STORE's instance.

/**
 * We now have a store, with undefined state, as we haven't 
 * initialized the `state` passed to the `rootReducer()` with
 * any value. We can verify that by the following statement:
 */
console.log(store.getState());

// DISPATCHING / ACTION

// SUBSCRIPTION


/**
 * 
 * Run Command: `node redux-basics.js`
 * 
 * Outputs
 * -------
 * #1: When `state` in the rootReducer() is not passed with any default initialState
 *    undefined
 * 
 * #2: When `state` in the rootReducer() is passed with a default initialState (as shown above)
 *    { counter: 0 }
 * 
 */
