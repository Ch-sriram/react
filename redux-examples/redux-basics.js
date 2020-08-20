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
/**
 * SUBSCRIPTIONs make sure that we don't have to call 
 * `store.getState()` to get the current state's snapshot 
 * inside the STORE, but also to inform the user, whenever we
 * need to do something with the new state, because something
 * in the old state, changed. Now, instead of guessing when
 * a particular action is executed and reduced in the store,
 * and then manually add our `console.log(store.getState())`
 * statement, we can instead simply add a SUBSCRIPTION that 
 * automatically gets called whenever an ACTION is Dispatched
 * and reduced by the REDUCER.
 * 
 * NOTE: SUBSCRIPTIONS should always be defined before the 
 * ACTION DISPATCHERS.
 * 
 * `store.subscribe()` method doesn't take any arguments.
 * We can return anything, or we can simply log the current
 * state as shown below. The SUBSCRIPTION is triggered whenever
 * an ACTION get DISPATCHED & reduced using the REDUCER.
 */

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
