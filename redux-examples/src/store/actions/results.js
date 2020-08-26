import * as actionTypes from "./actionTypes";

/**
 * The only place where we can execute the asynchronous code, 
 * is in our action creator. It's what redux-thunk is made for
 * and it's a common an best practice pattern. If we need to
 * reach out to a backend server to fetch data from it and then
 * store the data in our Redux STORE,  we definitely can do 
 * that, withing the action creator.
 */

// EXAMPLE of an Asynchronous ACTION CREATOR using redux-thunk
export const storeResult = ctr => {
  // After we get the response (fetched data) from the server,
  // we can always handle the logic to transform the response
  // data in here, inside the ACTION CREATOR, OR, we can handle
  // the data transformation logic inside the REDUCER. 


  // If we handle the logic here, then below is the example
  // const updatedCounter = ctr * 2; // can be used instead of `ctr` to be stored as a counter's value. 
  return { type: actionTypes.STORE_RESULT, counter: ctr };
};

// short version - less readable
// export const storeResultAsync = ctr => dispatch => setTimeout(() => dispatch(storeResult(ctr)), 2000);

/* longer version - more readable **/
export const storeResultAsync = ctr => {
  return dispatch => {
    // Instead of setTimeout(), we can make an HTTP request using fetch/axios API.
    setTimeout(() => {
      dispatch(storeResult(ctr))
    }, 2000);
  }
};

export const deleteResult = resID => ({ type: actionTypes.DELETE_RESULT, resultElementID: resID });

/**
 * NOTE: We often have a dilemma of handling the fetched data
 * that we receive from the server, where to handle the 
 * transformation logic? In the ACTION CREATORS? or in the
 * REDUCERS?
 * 
 * ACTION CREATORS do the following:
 *  1. Can run Async Code (when used with `redux-thunk`)
 *  2. This is NOT a Core Redux Concept.
 * 
 * REDUCERs do the following:
 *  1. Only runs pure synchronous code only.
 *  2. This is a Core Redux Concept which is used to only 
 *     Update the State.
 * 
 * And so, by the points above, we can see that REDUCER should
 * be solely responsible for updating the State and so, the
 * data transformation logic is recommended to be placed 
 * inside the respective REDUCERs. Whichever way we choose to
 * handle the logic for fetched data's transformation, we 
 * usually stick to it and keep it consistent across the app.
 */
