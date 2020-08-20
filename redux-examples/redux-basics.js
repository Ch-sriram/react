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
/**
 * The actions defined below using store.dispatch() are to be
 * reduced (i.e., logic for the action is to be defined yet)
 * inside the rootReducer below, as shown;
 */
const rootReducer = (state = initialState, action) => {
  // NOTE: We always make changes to the copy of the state -- Immutable Modification
  if (action.type === 'INC_COUNTER') {
    return {
      ...state, // copy the old state as the new state
      counter: state.counter + 1, // then add 1 to counter
    }
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state, // copy the old state as the new state
      counter: state.counter + action.value, // for ADD_COUNTER action, we specifically mentioned `value` property, and that, we can use it here.
    }
  }

  return state;
};

// STORE -- to make a STORE, we import redux from 'redux'
const store = createStore(rootReducer);  // param1: reducer
console.log(store.getState());  // { counter: 0 }

/**
 * Now, we want to use the store, not just for outputting it 
 * with store.getState() method, but also dispatch an ACTION.
 * 
 * An ACTION is DISPATCHED by using the store.dispatch() 
 * function, which takes in an `action` argument, which is a
 * JS Object, with the the first field to be given as `type`, 
 * and we can give any kind of subsequent fields; By 
 * convention, `payload` is the field used to send any data 
 * along with the ACTION, but we can use any name as shown in
 * the example below.
 * 
 * The `type` field is really important because the `type` 
 * mentioned inside store.dispatch() will later be used inside
 * the rootReducer() to know what to do for a a particular
 * ACTION's `type`.
 * 
 * We use all uppercase characters to name `type` by convention
 */
// DISPATCHING ACTION
store.dispatch({ type: `INC_COUNTER` });  // Increases the counter by 1
store.dispatch({ type: `ADD_COUNTER`, value: 10 }); // Increases the counter by `value`

console.log(store.getState());

// SUBSCRIPTION

/**
 * Outputs
 * -------
 *    { counter: 0 }
 *    { counter: 11 }
 */
