// LIBRARY IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";

// STYLING & CUSTOM COMPONENT IMPORTS
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

/**
 * Now, in our <Counter /> container, how do we access the
 * Redux STORE?
 *
 * For that, we need to connect this container with the Redux
 * STORE, or, to be precise, in the end what want to do is, we
 * want to setup a SUBSCRIPTION in this container.
 *
 * We connect the Redux STORE to this container, a bit
 * differently compared to how we did using Vanilla JS.
 *
 * We won't connect the Redux STORE to this container manually
 * by calling the store.subscribe() method, but instead, we'll
 * use a feature provided by 'react-redux' package, which is
 * known as `{ connect } from 'react-redux'` as imported above.
 *
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
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
      </div>
    );
  }
}

/**
 * `connect` is a HOC, which we use to wrap it around this
 * container (i.e., <Counter /> Component) when we export this
 * container (or, component). However, we won't wrap the
 * component directly, because `connect` itself is a function
 * that returns a function, and that returned function itself
 * takes the respective component/container as a parameter.
 *
 * Therefore, `connect` is a function that returns a HOC, which
 * means, `connect` is a closure HOC. And so, we pass in 2
 * vital pieces of information before `connect` actually wraps
 * around the actual container/component.
 *
 * The 2 pieces of information we send in as the the first set
 * of parameters to the `connect` closure HOC are:
 *  1. Which part of the whole application state is interesting
 *     to us? (Here, we are only interested in `counter`, from
 *     the state of this application. For a bigger app, we
 *     might want a different slice of the state)
 *  2. Which ACTIONs do we want to DISPATCH? (In a bigger app,
 *     we may have thousands of ACTIONs Dispatched from all
 *     over the application, but a given individual container
 *     may only DISPATCH a couple of ACTIONs)
 *
 * 2 =>
 * To Dispatch the ACTIONs, we, by convention, pass in a second
 * param to the first set of params being sent to the `connect`
 * closure HOC. The second param we send, is by convention
 * known as `mapDispatchToProps` constant, which is a function
 * which takes (by convention, `dispatch` as an argument) in
 * another function known as `dispatch` which is connected to
 * STORE's state, and will call `store.dispatch()` on the
 * STORE behind the scenes.
 *
 * The `mapDispatchToProps` method, takes in the `dispatch`
 * function as the param and returns an object in which each
 * field has property to which the value is an anonymous
 * function, which returns a call to the `dispatch()` function
 * passed to `mapDispatchToProps` method. Note that we can name
 * our property anyway we want.
 *
 * The `dispatch()` function inside the anonymous function
 * takes in a JS Object in which we have to definitely define
 * the name of the `task`, and then, if we have any `payload`,
 * in that case, we can also define the `payload` (i.e., any
 * data related to the action).
 *
 * The entire example of `mapDispatchToProps` is shown below.
 */

const mapDispatchToProps = dispatch => {
  /**
   * NOTE that we have to handle the INCREMENT action in the
   * [store/reducer.js] file. Open that file to understand.
   */
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }), // we use this onIncrementCounter property/method as a prop in line #64
  };
};

const mapStateToProps = state => {
  return { ctr: state.counter };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// In case of the component being a dumb component.
// export default connect(null, mapDispatchToProps)(Counter);

/**
 * For now, the 'INCREMENT' ACTION bound to the "Increment" 
 * Button in view, is the only button that's functioning, rest
 * all aren't functioning for now, as now, we've shifted state 
 * management to Redux from React.
 */
