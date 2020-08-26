import * as actionTypes from "./actionTypes";

// EXAMPLE of an Asynchronous ACTION CREATOR using redux-thunk
export const storeResult = ctr => {
  // const updatedCounter = ctr * 2; // can be used instead of `ctr` to be stored as a counter's value. 
  return { type: actionTypes.STORE_RESULT, counter: ctr };
};

// short version - less readable
// export const storeResultAsync = ctr => dispatch => setTimeout(() => dispatch(storeResult(ctr)), 2000);

/* longer version - more readable **/
/**
 * Whenever we handle the Data Transformation Logic inside 
 * an action creator, we also have access to the state using
 * the `getState()` method, which can be passed into the 
 * function that we return from the async ACTION as shown below
 */
export const storeResultAsync = ctr => {
  return (dispatch, getState) => {
    // Making changes before the http request
    const oldCounter = getState().ctr.counter;
    console.log(oldCounter);

    // setTimeout => dummy http request 
    setTimeout(() => {
      dispatch(storeResult(ctr))
    }, 2000);
  }
};

export const deleteResult = resID => ({ type: actionTypes.DELETE_RESULT, resultElementID: resID });
