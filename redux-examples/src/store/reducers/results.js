import * as actionTypes from "../actions/actions";

// handling only `results[]` here
const initialState = { results: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getUTCMilliseconds(),
          // to access state.counter, we've to get it through
          // the `action` object while dispatching this ACTION.
          // value: state.counter,
          value: action.counter,
        }),
      };

    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(
        (result) => result.id !== action.resultElementID
      );
      return {
        ...state,
        results: updatedResults,
      };

    default: return state;
  }
};

export default reducer;
