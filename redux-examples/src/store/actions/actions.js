export const INCREMENT     = "INCREMENT",
             DECREMENT     = "DECREMENT",
             ADD           = "ADD",
             SUBTRACT      = "SUBTRACT",
             STORE_RESULT  = "STORE_RESULT",
             DELETE_RESULT = "DELETE_RESULT";


/**
 * We make use of redux-thunk to handle async code in the 
 * middleware, using action creators. redux-thunk is a 3rd
 * party middleware, which is widely used as a middleware to 
 * handle async code inside an action creator, and it ensures
 * that the action creator not only returns an object, but 
 * returns a function that will eventually dispatch an ACTION.
 * 
 * Because of returning a function which dispatches an ACTION,
 * we can now dispatch that said ACTION asynchronously, using
 * the function that we return from the action creator.
 */

// These are simple ACTION CREATORS
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// These are ACTION CREATORS with `payload` passed into them
export const add = val => ({ type: ADD, value: val });
export const subtract = val => ({ type: SUBTRACT, value: val });

// EXAMPLE of an Asynchronous ACTION CREATOR using redux-thunk
export const storeResult = ctr => ({ type: STORE_RESULT, counter: ctr });

// short version - less readable
export const storeResultAsync = ctr => dispatch => setTimeout(() => dispatch(storeResult(ctr)), 2000);

/* longer version - more readable **/
// export const storeResultAsync = ctr => {
//   return dispatch => { // we get `dispatch()` argument due to redux-thunk
//     setTimeout(() => {
//       dispatch(storeResult(ctr)) // Inside dispatch(), we execute the synchronous part of the ACTION
//     }, 2000);
//   }
// };

export const deleteResult = resID => ({ type: DELETE_RESULT, resultElementID: resID });
