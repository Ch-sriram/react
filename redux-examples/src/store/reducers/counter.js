import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// we'll handle only `counter` here
const initialState = { counter: 0, };

// using utility function makes the reducer look leaner.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });
      
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });

    default: return state;
  }
};

export default reducer;
