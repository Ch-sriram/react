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

const redux = require('redux'); // ES6 imports not allowed
const createStore = redux.createStore;  // function reference

const initialState = { counter: 0, };

// REDUCER
const rootReducer = (state = initialState, action) => {
  // NOTE: We always make changes to the copy of the state -- Immutable Modification
  if (action.type === 'INC_COUNTER') {
    return {
      ...state, // copy the old state as the new state
      counter: state.counter + 1,
    }
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state, // copy the old state as the new state
      counter: state.counter + action.value,
    }
  }

  return state;
};

// STORE -- to make a `store`, we import redux from 'redux'
const store = createStore(rootReducer);  // param1: reducer
console.log(store.getState());  // { counter: 0 }

// SUBSCRIPTION
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// DISPATCHING ACTION
store.dispatch({ type: `INC_COUNTER` });  // Increases the counter by 1
store.dispatch({ type: `ADD_COUNTER`, value: 10 }); // Increases the counter by `value`

console.log(store.getState());

/**
 * Output
 * ------
 *    { counter: 0 }
 *    [Subscription] { counter: 1 }
 *    [Subscription] { counter: 11 }
 *    { counter: 11 }
 */
