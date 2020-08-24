import * as actionTypes from "../actions";

// we'll handle only `counter` here
const initialState = { counter: 0, };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: // (ES5) Update State Immutably
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT: // (ES6) Update State Immutably
      return {
        ...state, // distribute the old state's copy
        counter: state.counter - 1, // override the `counter`
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };

    default: return state;
  }
};

export default reducer;
