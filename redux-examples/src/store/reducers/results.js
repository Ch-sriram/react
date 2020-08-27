import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// handling only `results[]` here
const initialState = { results: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, { results: state.results.concat({ id: new Date().valueOf(), value: action.counter * 2, }) });

    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(result => result.id !== action.resultElementID);
      return updateObject(state, { results: updatedResults });

    default: return state;
  }
};

export default reducer;
