import * as actionTypes from "./actionTypes";

// EXAMPLE of an Asynchronous ACTION CREATOR using redux-thunk
export const storeResult = ctr => ({ type: actionTypes.STORE_RESULT, counter: ctr });

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

export const deleteResult = resID => ({ type: actionTypes.DELETE_RESULT, resultElementID: resID });
