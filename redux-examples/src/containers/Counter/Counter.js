// LIBRARY IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";

// STYLING & CUSTOM COMPONENT IMPORTS
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import './Counter.css';

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
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(storedResult => (
            <li key={storedResult.id} onClick={this.props.onDeleteResult}>
              {storedResult.value}
            </li>
          ))}
        </ul>
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
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};

const mapStateToProps = state => {
  return { ctr: state.counter, storedResults: state.results, };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// In case of the component being a dumb component.
// export default connect(null, mapDispatchToProps)(Counter);
