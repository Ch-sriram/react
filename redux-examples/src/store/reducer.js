const initialState = { counter: 0, results: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": // Updating State Immutably - Way #1
      //  newState.results still refers to state.results => Deep copy for state.results[] hasn't been achieved
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState; 
    case "DECREMENT": // Updating State Immutably using Spread Operator ... 
      return {
        ...state, // distribute the old state's copy
        counter: state.counter - 1, // override the `counter` in the distributed state
      };
    case "ADD":
      return {
        ...state, 
        counter: state.counter + action.value,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };

    case "STORE_RESULT":
      return {
        ...state,
        // concat() returns a new array. push() concatenates on the same array => concat() is for immutable updation
        results: state.results.concat(
          { id: new Date().getTime(), value: state.counter }
        ),
      }
    default: return state;
  }
};

export default reducer;
