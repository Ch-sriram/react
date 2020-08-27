import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// handling only `results[]` here
const initialState = { results: [] };

// Convention is to use camel casing to replicate the name of the case.
const deleteResult = (state, action) => {
  const updatedResults = state.results.filter(result => result.id !== action.resultElementID);
  return updateObject(state, { results: updatedResults });
}

const reducer = (state = initialState, action) => {
  // This is how we make a leaner switch case below, by adding a function outside to handle the internal details of a particular case.
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, { results: state.results.concat({ id: new Date().valueOf(), value: action.counter * 2, }) });
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    default: return state;
  }
};

export default reducer;
