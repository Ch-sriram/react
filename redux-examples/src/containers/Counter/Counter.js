// LIBRARY IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";

// STYLING & CUSTOM COMPONENT IMPORTS
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

/**
 * ASSIGNMENT 
 * ----------
 * Dispatch ACTIONS for DECREMENT, SUBTRACT 5 & ADD by 5.
 */

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  /**
   * NOTE that we have to handle all the dispatched ACTIONs in 
   * the [store/reducer.js] file. Open that file to understand.
   */
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({type: "ADD", value: 5}),
    onSubtractCounter: () => dispatch({type: "SUBTRACT", value: 5}),
  };
};

const mapStateToProps = state => {
  return { ctr: state.counter };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// In case of the component being a dumb component.
// export default connect(null, mapDispatchToProps)(Counter);
